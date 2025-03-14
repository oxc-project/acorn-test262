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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 220,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 59,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 16,
              "decorators": [],
              "name": "x1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 16,
              "end": 59,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 17,
                  "end": 26,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 18,
                    "end": 26,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 20,
                      "end": 26
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 57,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 38,
                      "end": 57,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 39,
                          "end": 46,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
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
                                "raw": "'hi'",
                                "value": "hi"
                              }
                            }
                          }
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
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 218,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 75,
              "decorators": [],
              "name": "x1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 75,
              "end": 218,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 136,
                          "end": 140,
                          "raw": "'hi'",
                          "value": "hi"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 135,
                        "decorators": [],
                        "name": "callback",
                        "optional": false
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 151,
                    "end": 167,
                    "expression": {
                      "type": "CallExpression",
                      "start": 151,
                      "end": 166,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 160,
                          "end": 165,
                          "raw": "'bye'",
                          "value": "bye"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 159,
                        "decorators": [],
                        "name": "callback",
                        "optional": false
                      },
                      "optional": false
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 182,
                          "decorators": [],
                          "name": "hm",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 185,
                          "end": 189,
                          "raw": "\"hm\"",
                          "value": "hm"
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 199,
                    "end": 212,
                    "expression": {
                      "type": "CallExpression",
                      "start": 199,
                      "end": 211,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 208,
                          "end": 210,
                          "decorators": [],
                          "name": "hm",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 207,
                        "decorators": [],
                        "name": "callback",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 76,
                  "end": 85,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 79,
                      "end": 85
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 115,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 97,
                      "end": 115,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 98,
                          "end": 104,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 99,
                            "end": 104,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 101,
                              "end": 104
                            }
                          }
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
                  }
                }
              ]
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
