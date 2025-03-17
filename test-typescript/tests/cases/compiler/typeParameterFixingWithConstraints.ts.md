__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 44,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 21,
            "end": 42,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 35,
                "decorators": [],
                "name": "barId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 29,
                    "end": 35
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 41,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "IBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 163,
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 163,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 67,
            "end": 161,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 90,
                "end": 99,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 99,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 99,
                      "decorators": [],
                      "name": "TBar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 101,
                "end": 126,
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 105,
                  "end": 126,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 107,
                    "end": 126,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 108,
                        "end": 117,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 111,
                          "end": 117,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 113,
                            "end": 117,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 113,
                              "end": 117,
                              "decorators": [],
                              "name": "TBar",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 126,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 122,
                        "end": 126,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 126,
                          "decorators": [],
                          "name": "TBar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 128,
                "end": 153,
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 153,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 134,
                    "end": 153,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 135,
                        "end": 144,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 138,
                          "end": 144,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 140,
                            "end": 144,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 144,
                              "decorators": [],
                              "name": "TBar",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 149,
                        "end": 153,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 153,
                          "decorators": [],
                          "name": "TBar",
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
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 156,
                "end": 160,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 160,
                  "decorators": [],
                  "name": "TBar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 70,
              "end": 89,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 71,
                  "end": 88,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 84,
                    "end": 88,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 88,
                      "decorators": [],
                      "name": "IBar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 75,
                    "decorators": [],
                    "name": "TBar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 60,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 178,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 178,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 178,
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 180,
      "end": 229,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 228,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 188,
            "end": 201,
            "properties": [
              {
                "type": "Property",
                "start": 190,
                "end": 199,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 193,
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
                  "start": 195,
                  "end": 199,
                  "raw": "null",
                  "value": null
                }
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 203,
            "end": 214,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 210,
              "end": 214,
              "raw": "null",
              "value": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 203,
                "end": 206,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 216,
            "end": 227,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 223,
              "end": 227,
              "raw": "null",
              "value": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 219,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 180,
          "end": 187,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 184,
            "end": 187,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
