contextualTupleTypeParameterReadonly.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "each",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 75,
          "decorators": [],
          "name": "cases",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 75,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 59,
              "end": 75,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 59,
                "end": 72,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 111,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 78,
          "end": 111,
          "params": [
            {
              "type": "Identifier",
              "start": 79,
              "end": 102,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 102,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 83,
                  "end": 102,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 84,
                      "end": 94,
                      "argument": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 91,
                        "decorators": [],
                        "name": "args",
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
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
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
              }
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
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 50,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 50,
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 45,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 125,
            "decorators": [],
            "name": "cases",
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 138,
                      "end": 141,
                      "raw": "'1'",
                      "value": "1"
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
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 152,
                      "end": 155,
                      "raw": "'2'",
                      "value": "2"
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
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 183,
            "decorators": [],
            "name": "eacher",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 186,
            "end": 197,
            "arguments": [
              {
                "type": "Identifier",
                "start": 191,
                "end": 196,
                "decorators": [],
                "name": "cases",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 186,
              "end": 190,
              "decorators": [],
              "name": "each",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 236,
      "expression": {
        "type": "CallExpression",
        "start": 200,
        "end": 235,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 207,
            "end": 234,
            "async": false,
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
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 230,
                  "end": 232,
                  "expression": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 231,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 200,
          "end": 206,
          "decorators": [],
          "name": "eacher",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 300,
      "end": 364,
      "expression": {
        "type": "CallExpression",
        "start": 300,
        "end": 363,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 307,
            "end": 362,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "ArrayPattern",
                        "start": 332,
                        "end": 338,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 333,
                            "end": 334,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 336,
                            "end": 337,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          }
                        ],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 345,
                        "decorators": [],
                        "name": "args",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 351,
                  "end": 353,
                  "expression": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 352,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 358,
                  "end": 360,
                  "expression": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 308,
                "end": 315,
                "argument": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 315,
                  "decorators": [],
                  "name": "args",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 300,
          "end": 306,
          "decorators": [],
          "name": "eacher",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
