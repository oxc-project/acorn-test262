__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 402,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "useState",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 25,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 27,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "S",
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
          "start": 29,
          "end": 52,
          "decorators": [],
          "name": "initialState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 52,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 44,
              "end": 51,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 47,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 50,
                  "end": 51,
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "S",
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
        "start": 53,
        "end": 74,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 55,
          "end": 74,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 56,
              "end": 57,
              "typeName": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSFunctionType",
              "start": 59,
              "end": 73,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 63,
                      "end": 64,
                      "typeName": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "S",
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
                "start": 66,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 69,
                  "end": 73
                }
              }
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 86,
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 89,
        "end": 179,
        "typeName": {
          "type": "Identifier",
          "start": 89,
          "end": 97,
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 97,
          "end": 179,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 98,
              "end": 178,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 104,
                  "end": 118,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 109,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 123,
                  "end": 147,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 126,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 146,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 128,
                      "end": 146,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 129,
                          "end": 137,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 132,
                            "end": 137,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 134,
                              "end": 137
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 139,
                        "end": 146,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 142,
                          "end": 146
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 152,
                  "end": 176,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 155,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 155,
                    "end": 175,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 157,
                      "end": 175,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 158,
                          "end": 166,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 161,
                            "end": 166,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 163,
                              "end": 166
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 168,
                        "end": 175,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 171,
                          "end": 175
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 182,
      "end": 402,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 189,
        "end": 402,
        "id": {
          "type": "Identifier",
          "start": 198,
          "end": 207,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 210,
          "end": 402,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 216,
              "end": 400,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 222,
                  "end": 399,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 222,
                    "end": 239,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 223,
                        "end": 228,
                        "decorators": [],
                        "name": "state",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 230,
                        "end": 238,
                        "decorators": [],
                        "name": "setState",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 242,
                    "end": 399,
                    "callee": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 250,
                      "decorators": [],
                      "name": "useState",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 250,
                      "end": 256,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 251,
                          "end": 255,
                          "typeName": {
                            "type": "Identifier",
                            "start": 251,
                            "end": 255,
                            "decorators": [],
                            "name": "Data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 257,
                        "end": 398,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "ObjectExpression",
                          "start": 264,
                          "end": 397,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 274,
                              "end": 289,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 274,
                                "end": 279,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 281,
                                "end": 289,
                                "value": "string",
                                "raw": "\"string\""
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 326,
                              "end": 353,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 326,
                                "end": 329,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 331,
                                "end": 353,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 332,
                                    "end": 335,
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "CallExpression",
                                  "start": 340,
                                  "end": 353,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 340,
                                    "end": 348,
                                    "decorators": [],
                                    "name": "setState",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 349,
                                      "end": 352,
                                      "decorators": [],
                                      "name": "arg",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "optional": false
                                },
                                "id": null,
                                "generator": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 363,
                              "end": 390,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 363,
                                "end": 366,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 368,
                                "end": 390,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 369,
                                    "end": 372,
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "CallExpression",
                                  "start": 377,
                                  "end": 390,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 377,
                                    "end": 385,
                                    "decorators": [],
                                    "name": "setState",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 386,
                                      "end": 389,
                                      "decorators": [],
                                      "name": "arg",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "optional": false
                                },
                                "id": null,
                                "generator": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
