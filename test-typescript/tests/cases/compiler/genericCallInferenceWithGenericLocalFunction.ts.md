__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 293,
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
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 78,
            "name": "createTransform",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 81,
            "end": 113,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 106,
                "name": "tr",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 92,
                    "end": 106,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 100,
                        "name": "from",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 97,
                          "end": 100,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 99,
                            "end": 100,
                            "typeName": {
                              "type": "Identifier",
                              "start": 99,
                              "end": 100,
                              "name": "I",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 105,
                        "end": 106,
                        "typeName": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 106,
                          "name": "O",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 111,
              "end": 113,
              "name": "tr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 81,
              "end": 87,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 82,
                  "end": 83,
                  "name": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
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
                    "name": "O",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 131,
        "name": "withP2",
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
          "start": 135,
          "end": 139,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 139,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "name": "P",
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
                "id": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 155,
                  "end": 191,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 160,
                      "end": 167,
                      "name": "from",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 164,
                        "end": 167,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 166,
                          "end": 167,
                          "typeName": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 167,
                            "name": "I",
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
                          "name": "from",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 155,
                    "end": 159,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 156,
                        "end": 157,
                        "name": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "name": "I",
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
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 195,
            "end": 221,
            "argument": {
              "type": "CallExpression",
              "start": 202,
              "end": 220,
              "callee": {
                "type": "Identifier",
                "start": 202,
                "end": 217,
                "name": "createTransform",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 131,
        "end": 134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 132,
            "end": 133,
            "name": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "P",
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
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 236,
            "name": "addP2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 239,
            "end": 257,
            "callee": {
              "type": "Identifier",
              "start": 239,
              "end": 245,
              "name": "withP2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 251,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 253,
                      "end": 254,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 259,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 271,
            "name": "added2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 274,
            "end": 291,
            "callee": {
              "type": "Identifier",
              "start": 274,
              "end": 279,
              "name": "addP2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 285,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 287,
                      "end": 288,
                      "value": 2,
                      "raw": "2"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
