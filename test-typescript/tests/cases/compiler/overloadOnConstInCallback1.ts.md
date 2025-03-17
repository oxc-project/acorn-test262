__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 220,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 59,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 16,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 16,
              "end": 59,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 17,
                  "end": 26,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 18,
                    "end": 26,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 20,
                      "end": 26
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 57,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 38,
                      "end": 57,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 39,
                          "end": 46,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 40,
                            "end": 46,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 42,
                              "end": 46,
                              "literal": {
                                "type": "Literal",
                                "start": 42,
                                "end": 46,
                                "value": "hi",
                                "raw": "'hi'"
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 48,
                        "end": 57,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 51,
                          "end": 57
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 73,
            "end": 218,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 75,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 75,
              "end": 218,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 76,
                  "end": 85,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 79,
                      "end": 85
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 115,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 97,
                      "end": 115,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 98,
                          "end": 104,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 99,
                            "end": 104,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 101,
                              "end": 104
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 106,
                        "end": 115,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 109,
                          "end": 115
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 218,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 127,
                    "end": 142,
                    "expression": {
                      "type": "CallExpression",
                      "start": 127,
                      "end": 141,
                      "callee": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 135,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 136,
                          "end": 140,
                          "value": "hi",
                          "raw": "'hi'"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 151,
                    "end": 167,
                    "expression": {
                      "type": "CallExpression",
                      "start": 151,
                      "end": 166,
                      "callee": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 159,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 160,
                          "end": 165,
                          "value": "bye",
                          "raw": "'bye'"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 176,
                    "end": 190,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 180,
                        "end": 189,
                        "id": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 182,
                          "name": "hm",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 185,
                          "end": 189,
                          "value": "hm",
                          "raw": "\"hm\""
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 199,
                    "end": 212,
                    "expression": {
                      "type": "CallExpression",
                      "start": 199,
                      "end": 211,
                      "callee": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 207,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 208,
                          "end": 210,
                          "name": "hm",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
