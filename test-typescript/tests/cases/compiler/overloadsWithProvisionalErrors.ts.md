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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 101,
            "name": "func",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 17,
                        "end": 26,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 18,
                          "end": 26,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 20,
                            "end": 26
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 42,
                        "end": 89,
                        "name": "lambda",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 48,
                          "end": 89,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 50,
                            "end": 89,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 51,
                                "end": 60,
                                "name": "s",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 52,
                                  "end": 60,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 54,
                                    "end": 60
                                  }
                                },
                                "decorators": [],
                                "optional": false
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
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 67,
                                      "end": 68,
                                      "name": "a",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 68,
                                      "end": 76,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 70,
                                        "end": 76
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 78,
                                    "end": 87,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 78,
                                      "end": 79,
                                      "name": "b",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 79,
                                      "end": 87,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 81,
                                        "end": 87
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 120,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 119,
        "callee": {
          "type": "Identifier",
          "start": 104,
          "end": 108,
          "name": "func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 109,
            "end": 118,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ObjectExpression",
              "start": 115,
              "end": 117,
              "properties": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 221,
      "expression": {
        "type": "CallExpression",
        "start": 190,
        "end": 220,
        "callee": {
          "type": "Identifier",
          "start": 190,
          "end": 194,
          "name": "func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 195,
            "end": 219,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ObjectExpression",
              "start": 201,
              "end": 218,
              "properties": [
                {
                  "type": "Property",
                  "start": 203,
                  "end": 210,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 210,
                    "name": "blah",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 212,
                  "end": 216,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 215,
                    "end": 216,
                    "value": 3,
                    "raw": "3"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 362,
      "expression": {
        "type": "CallExpression",
        "start": 337,
        "end": 361,
        "callee": {
          "type": "Identifier",
          "start": 337,
          "end": 341,
          "name": "func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 342,
            "end": 360,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ObjectExpression",
              "start": 348,
              "end": 359,
              "properties": [
                {
                  "type": "Property",
                  "start": 350,
                  "end": 357,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 351,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 357,
                    "name": "blah",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
