__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 25,
          "end": 29,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 29,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 28,
              "end": 29,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 30,
        "end": 40,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 32,
          "end": 40,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 34,
              "end": 38,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 37,
                  "end": 38,
                  "typeName": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 42,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 63,
        "decorators": [],
        "name": "call",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 83,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 74,
              "end": 83,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 74,
                "end": 81
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
          "start": 88,
          "end": 115,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 115,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 91,
              "end": 115,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 93,
                  "end": 113,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 94,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 96,
                      "end": 113,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 97,
                          "end": 107,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 104,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 104,
                            "end": 107,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 106,
                              "end": 107,
                              "typeName": {
                                "type": "Identifier",
                                "start": 106,
                                "end": 107,
                                "decorators": [],
                                "name": "A",
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
                        "start": 109,
                        "end": 113,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 112,
                          "end": 113,
                          "typeName": {
                            "type": "Identifier",
                            "start": 112,
                            "end": 113,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        },
        {
          "type": "RestElement",
          "start": 117,
          "end": 127,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 124,
            "end": 127,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 127,
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "A",
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
        "start": 128,
        "end": 131,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 130,
          "end": 131,
          "typeName": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 248,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 247,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 215,
            "decorators": [],
            "name": "leak",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 218,
            "end": 247,
            "callee": {
              "type": "Identifier",
              "start": 218,
              "end": 222,
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 223,
                "end": 243,
                "callee": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 227,
                  "decorators": [],
                  "name": "wrap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 228,
                    "end": 242,
                    "expression": true,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 228,
                      "end": 231,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 229,
                          "end": 230,
                          "name": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 230,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
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
                        "start": 232,
                        "end": 236,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 233,
                          "end": 236,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 235,
                            "end": 236,
                            "typeName": {
                              "type": "Identifier",
                              "start": 235,
                              "end": 236,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 242,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 245,
                "end": 246,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
