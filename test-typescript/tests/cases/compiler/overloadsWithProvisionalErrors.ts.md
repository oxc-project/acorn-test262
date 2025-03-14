__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 479,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 101,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 10,
                "end": 101,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 16,
                    "end": 36,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 17,
                        "end": 26,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 18,
                          "end": 26,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 20,
                            "end": 26
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 27,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 29,
                        "end": 35
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 41,
                    "end": 99,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 42,
                        "end": 89,
                        "decorators": [],
                        "name": "lambda",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 48,
                          "end": 89,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 50,
                            "end": 89,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 51,
                                "end": 60,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 52,
                                  "end": 60,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 54,
                                    "end": 60
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 62,
                              "end": 89,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 65,
                                "end": 89,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 67,
                                    "end": 77,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 67,
                                      "end": 68,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 68,
                                      "end": 76,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 70,
                                        "end": 76
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 78,
                                    "end": 87,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 78,
                                      "end": 79,
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 79,
                                      "end": 87,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 81,
                                        "end": 87
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 92,
                        "end": 98
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 120,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 119,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 109,
            "end": 118,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 115,
              "end": 117,
              "properties": []
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 104,
          "end": 108,
          "decorators": [],
          "name": "func",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 221,
      "expression": {
        "type": "CallExpression",
        "start": 190,
        "end": 220,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 195,
            "end": 219,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 201,
              "end": 218,
              "properties": [
                {
                  "type": "Property",
                  "start": 203,
                  "end": 210,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 210,
                    "decorators": [],
                    "name": "blah",
                    "optional": false
                  }
                },
                {
                  "type": "Property",
                  "start": 212,
                  "end": 216,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 215,
                    "end": 216,
                    "raw": "3",
                    "value": 3
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 190,
          "end": 194,
          "decorators": [],
          "name": "func",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 362,
      "expression": {
        "type": "CallExpression",
        "start": 337,
        "end": 361,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 342,
            "end": 360,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 348,
              "end": 359,
              "properties": [
                {
                  "type": "Property",
                  "start": 350,
                  "end": 357,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 351,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 357,
                    "decorators": [],
                    "name": "blah",
                    "optional": false
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 337,
          "end": 341,
          "decorators": [],
          "name": "func",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
