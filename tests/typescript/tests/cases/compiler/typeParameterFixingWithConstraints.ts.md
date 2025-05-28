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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "IBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 44,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 21,
            "end": 42,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 41,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 60,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 163,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 67,
            "end": 161,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 70,
              "end": 89,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 71,
                  "end": 88,
                  "name": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 75,
                    "decorators": [],
                    "name": "TBar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 84,
                    "end": 88,
                    "typeName": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 88,
                      "decorators": [],
                      "name": "IBar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 99,
                      "decorators": [],
                      "name": "TBar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                    "typeParameters": null,
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 113,
                              "end": 117,
                              "decorators": [],
                              "name": "TBar",
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
                      "start": 119,
                      "end": 126,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 122,
                        "end": 126,
                        "typeName": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 126,
                          "decorators": [],
                          "name": "TBar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
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
                    "typeParameters": null,
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 144,
                              "decorators": [],
                              "name": "TBar",
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
                      "start": 146,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 149,
                        "end": 153,
                        "typeName": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 153,
                          "decorators": [],
                          "name": "TBar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 156,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 160,
                  "decorators": [],
                  "name": "TBar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 179,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 178,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 178,
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 229,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 228,
        "callee": {
          "type": "MemberExpression",
          "start": 180,
          "end": 187,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 183,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 184,
            "end": 187,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 193,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 195,
                  "end": 199,
                  "value": null,
                  "raw": "null"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 203,
            "end": 214,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "Literal",
              "start": 210,
              "end": 214,
              "value": null,
              "raw": "null"
            },
            "id": null,
            "generator": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 216,
            "end": 227,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "Literal",
              "start": 223,
              "end": 227,
              "value": null,
              "raw": "null"
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
