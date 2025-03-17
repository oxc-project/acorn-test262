__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 365,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "name": "each",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 75,
          "name": "cases",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 75,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 59,
              "end": 75,
              "typeName": {
                "type": "Identifier",
                "start": 59,
                "end": 72,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 72,
                "end": 75,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 73,
                    "end": 74,
                    "typeName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 50,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 50,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 45,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 45,
                "end": 50,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 46,
                    "end": 49
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 111,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 78,
          "end": 111,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 79,
              "end": 102,
              "name": "fn",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 102,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 83,
                  "end": 102,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 84,
                      "end": 94,
                      "argument": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 91,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 91,
                        "end": 94,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 93,
                          "end": 94,
                          "typeName": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 94,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 102,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 99,
                      "end": 102
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
            "start": 104,
            "end": 111,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 107,
              "end": 111
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 125,
            "name": "cases",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 128,
            "end": 168,
            "expression": {
              "type": "ArrayExpression",
              "start": 128,
              "end": 159,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 134,
                  "end": 142,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 135,
                      "end": 136,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 138,
                      "end": 141,
                      "value": "1",
                      "raw": "'1'"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "start": 148,
                  "end": 156,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 149,
                      "end": 150,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 152,
                      "end": 155,
                      "value": "2",
                      "raw": "'2'"
                    }
                  ]
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 163,
              "end": 168,
              "typeName": {
                "type": "Identifier",
                "start": 163,
                "end": 168,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 183,
            "name": "eacher",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 186,
            "end": 197,
            "callee": {
              "type": "Identifier",
              "start": 186,
              "end": 190,
              "name": "each",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 191,
                "end": 196,
                "name": "cases",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 236,
      "expression": {
        "type": "CallExpression",
        "start": 200,
        "end": 235,
        "callee": {
          "type": "Identifier",
          "start": 200,
          "end": 206,
          "name": "eacher",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 207,
            "end": 234,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 217,
              "end": 234,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 223,
                  "end": 225,
                  "expression": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 230,
                  "end": 232,
                  "expression": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 231,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
      "start": 300,
      "end": 364,
      "expression": {
        "type": "CallExpression",
        "start": 300,
        "end": 363,
        "callee": {
          "type": "Identifier",
          "start": 300,
          "end": 306,
          "name": "eacher",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 307,
            "end": 362,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 308,
                "end": 315,
                "argument": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 315,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 320,
              "end": 362,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 326,
                  "end": 346,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 332,
                      "end": 345,
                      "id": {
                        "type": "ArrayPattern",
                        "start": 332,
                        "end": 338,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 333,
                            "end": 334,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 336,
                            "end": 337,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 345,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 351,
                  "end": 353,
                  "expression": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 352,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 358,
                  "end": 360,
                  "expression": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
