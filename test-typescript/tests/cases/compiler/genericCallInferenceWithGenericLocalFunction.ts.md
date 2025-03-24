__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 292,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 78,
            "decorators": [],
            "name": "createTransform",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 81,
            "end": 113,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 111,
              "end": 113,
              "decorators": [],
              "name": "tr",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 106,
                "decorators": [],
                "name": "tr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 92,
                    "end": 106,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 100,
                        "decorators": [],
                        "name": "from",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 97,
                          "end": 100,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 99,
                            "end": 100,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 99,
                              "end": 100,
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 105,
                        "end": 106,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 106,
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 81,
              "end": 87,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 82,
                  "end": 83,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 85,
                  "end": 86,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 223,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 141,
        "end": 223,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 145,
            "end": 192,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 151,
                "end": 191,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 155,
                  "end": 191,
                  "async": false,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 173,
                    "end": 190,
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "start": 175,
                        "end": 182,
                        "argument": {
                          "type": "Identifier",
                          "start": 178,
                          "end": 182,
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "SpreadElement",
                        "start": 184,
                        "end": 188,
                        "argument": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 188,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 160,
                      "end": 167,
                      "decorators": [],
                      "name": "from",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 164,
                        "end": 167,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 166,
                          "end": 167,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 167,
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 155,
                    "end": 159,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 156,
                        "end": 157,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 195,
            "end": 221,
            "argument": {
              "type": "CallExpression",
              "start": 202,
              "end": 220,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 202,
                "end": 217,
                "decorators": [],
                "name": "createTransform",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 131,
        "decorators": [],
        "name": "withP2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 135,
          "end": 139,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 139,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 139,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 131,
        "end": 134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 132,
            "end": 133,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 236,
            "decorators": [],
            "name": "addP2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 239,
            "end": 257,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 246,
                "end": 256,
                "properties": [
                  {
                    "type": "Property",
                    "start": 248,
                    "end": 254,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 251,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 253,
                      "end": 254,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 239,
              "end": 245,
              "decorators": [],
              "name": "withP2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 291,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 271,
            "decorators": [],
            "name": "added2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 274,
            "end": 291,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 280,
                "end": 290,
                "properties": [
                  {
                    "type": "Property",
                    "start": 282,
                    "end": 288,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 285,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 287,
                      "end": 288,
                      "raw": "2",
                      "value": 2
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 274,
              "end": 279,
              "decorators": [],
              "name": "addP2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
