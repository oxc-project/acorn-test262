__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "name": "wrap",
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
          "start": 25,
          "end": 29,
          "name": "x",
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
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "type": "TSDeclareFunction",
      "start": 42,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 63,
        "name": "call",
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
          "start": 88,
          "end": 115,
          "name": "x",
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "argument": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 104,
                            "name": "args",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "decorators": [],
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
                                "name": "A",
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 117,
          "end": 127,
          "argument": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
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
                "name": "A",
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
      "body": null,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 247,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 215,
            "name": "leak",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 218,
            "end": 247,
            "callee": {
              "type": "Identifier",
              "start": 218,
              "end": 222,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 223,
                "end": 243,
                "callee": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 227,
                  "name": "wrap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 228,
                    "end": 242,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 232,
                        "end": 236,
                        "name": "x",
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 242,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 245,
                "end": 246,
                "value": 1,
                "raw": "1"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
