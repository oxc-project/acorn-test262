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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "name": "useState",
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
          "start": 29,
          "end": 52,
          "name": "initialState",
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
                    "name": "S",
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
      "body": null,
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
              "name": "S",
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
                "name": "S",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "s",
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
                        "name": "S",
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
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 86,
        "name": "Data",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "Readonly",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 132,
                            "end": 137,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 134,
                              "end": 137
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 161,
                            "end": 166,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 163,
                              "end": 166
                            }
                          },
                          "decorators": [],
                          "optional": false
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
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                  "id": {
                    "type": "ArrayPattern",
                    "start": 222,
                    "end": 239,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 223,
                        "end": 228,
                        "name": "state",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 230,
                        "end": 238,
                        "name": "setState",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
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
                      "name": "useState",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 257,
                        "end": 398,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "ObjectExpression",
                          "start": 264,
                          "end": 397,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 274,
                              "end": 289,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 274,
                                "end": 279,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 281,
                                "end": 289,
                                "value": "string",
                                "raw": "\"string\""
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 326,
                              "end": 353,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 326,
                                "end": 329,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 331,
                                "end": 353,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 332,
                                    "end": 335,
                                    "name": "arg",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "CallExpression",
                                  "start": 340,
                                  "end": 353,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 340,
                                    "end": 348,
                                    "name": "setState",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 349,
                                      "end": 352,
                                      "name": "arg",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 363,
                              "end": 390,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 363,
                                "end": 366,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 368,
                                "end": 390,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 369,
                                    "end": 372,
                                    "name": "arg",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "CallExpression",
                                  "start": 377,
                                  "end": 390,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 377,
                                    "end": 385,
                                    "name": "setState",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 386,
                                      "end": 389,
                                      "name": "arg",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
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
                            "name": "Data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
