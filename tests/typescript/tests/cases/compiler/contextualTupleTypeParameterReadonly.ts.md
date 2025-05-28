__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 364,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "each",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 50,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 45,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null
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
              "typeName": {
                "type": "Identifier",
                "start": 59,
                "end": 72,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
          "typeParameters": null,
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
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 84,
                      "end": 94,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 91,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                            "optional": false,
                            "typeAnnotation": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 169,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 125,
            "decorators": [],
            "name": "cases",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 198,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 183,
            "decorators": [],
            "name": "eacher",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 186,
            "end": 197,
            "callee": {
              "type": "Identifier",
              "start": 186,
              "end": 190,
              "decorators": [],
              "name": "each",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 191,
                "end": 196,
                "decorators": [],
                "name": "cases",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "eacher",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 207,
            "end": 234,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "eacher",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 307,
            "end": 362,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 308,
                "end": 315,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 315,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 320,
              "end": 362,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 326,
                  "end": 346,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 332,
                      "end": 345,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 336,
                            "end": 337,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 345,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
