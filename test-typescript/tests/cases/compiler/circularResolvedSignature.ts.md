__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 403,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 75,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "useState",
        "optional": false
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
                    "optional": false
                  }
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
                "optional": false
              }
            },
            {
              "type": "TSFunctionType",
              "start": 59,
              "end": 73,
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
                        "optional": false
                      }
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 25,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 27,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 180,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 86,
        "decorators": [],
        "name": "Data",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 89,
        "end": 179,
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
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 109,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 123,
                  "end": 147,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 126,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 146,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 128,
                      "end": 146,
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
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 152,
                  "end": 176,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 155,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 155,
                    "end": 175,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 157,
                      "end": 175,
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
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 89,
          "end": 97,
          "decorators": [],
          "name": "Readonly",
          "optional": false
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 182,
      "end": 402,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 189,
        "end": 402,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 210,
          "end": 402,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 216,
              "end": 400,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 222,
                  "end": 399,
                  "definite": false,
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
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 230,
                        "end": 238,
                        "decorators": [],
                        "name": "setState",
                        "optional": false
                      }
                    ],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 242,
                    "end": 399,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 257,
                        "end": 398,
                        "async": false,
                        "body": {
                          "type": "ObjectExpression",
                          "start": 264,
                          "end": 397,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 274,
                              "end": 289,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 274,
                                "end": 279,
                                "decorators": [],
                                "name": "value",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 281,
                                "end": 289,
                                "raw": "\"string\"",
                                "value": "string"
                              }
                            },
                            {
                              "type": "Property",
                              "start": 326,
                              "end": 353,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 326,
                                "end": 329,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 331,
                                "end": 353,
                                "async": false,
                                "body": {
                                  "type": "CallExpression",
                                  "start": 340,
                                  "end": 353,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 349,
                                      "end": 352,
                                      "decorators": [],
                                      "name": "arg",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 340,
                                    "end": 348,
                                    "decorators": [],
                                    "name": "setState",
                                    "optional": false
                                  },
                                  "optional": false
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 332,
                                    "end": 335,
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false
                                  }
                                ]
                              }
                            },
                            {
                              "type": "Property",
                              "start": 363,
                              "end": 390,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 363,
                                "end": 366,
                                "decorators": [],
                                "name": "bar",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 368,
                                "end": 390,
                                "async": false,
                                "body": {
                                  "type": "CallExpression",
                                  "start": 377,
                                  "end": 390,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 386,
                                      "end": 389,
                                      "decorators": [],
                                      "name": "arg",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 377,
                                    "end": 385,
                                    "decorators": [],
                                    "name": "setState",
                                    "optional": false
                                  },
                                  "optional": false
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 369,
                                    "end": 372,
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 250,
                      "decorators": [],
                      "name": "useState",
                      "optional": false
                    },
                    "optional": false,
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
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 198,
          "end": 207,
          "decorators": [],
          "name": "Component",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
