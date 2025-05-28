__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 418,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 44,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 44,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 42,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 32,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 32,
                "end": 42,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 33,
                    "end": 37,
                    "decorators": [],
                    "name": "ctor",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 39,
                  "end": 42,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 247,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 53,
        "end": 247,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 247,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 77,
              "end": 96,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 85,
                "end": 87,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 87,
                "end": 95,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 89,
                  "end": 95
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 101,
              "end": 120,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 109,
                "end": 111,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 111,
                "end": 119,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 113,
                  "end": 119
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 126,
              "end": 245,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 126,
                "end": 137,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 137,
                "end": 245,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 138,
                    "end": 150,
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 147,
                        "end": 150
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 152,
                    "end": 163,
                    "decorators": [],
                    "name": "url",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 155,
                      "end": 163,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 157,
                        "end": 163
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 165,
                  "end": 245,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 174,
                      "end": 189,
                      "expression": {
                        "type": "CallExpression",
                        "start": 174,
                        "end": 188,
                        "callee": {
                          "type": "Super",
                          "start": 174,
                          "end": 179
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 180,
                            "end": 187,
                            "decorators": [],
                            "name": "element",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 198,
                      "end": 216,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 198,
                        "end": 215,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 198,
                          "end": 205,
                          "object": {
                            "type": "ThisExpression",
                            "start": 198,
                            "end": 202
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 203,
                            "end": 205,
                            "decorators": [],
                            "name": "p1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 215,
                          "decorators": [],
                          "name": "element",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 225,
                      "end": 239,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 225,
                        "end": 238,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 225,
                          "end": 232,
                          "object": {
                            "type": "ThisExpression",
                            "start": 225,
                            "end": 229
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 232,
                            "decorators": [],
                            "name": "p2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 238,
                          "decorators": [],
                          "name": "url",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 249,
      "end": 386,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 256,
        "end": 386,
        "id": {
          "type": "Identifier",
          "start": 266,
          "end": 268,
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 269,
          "end": 386,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 275,
              "end": 324,
              "key": {
                "type": "Identifier",
                "start": 275,
                "end": 283,
                "decorators": [],
                "name": "register",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 284,
                  "end": 322,
                  "decorators": [],
                  "name": "inputClass",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 294,
                    "end": 322,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 296,
                      "end": 322,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 300,
                          "end": 316,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 309,
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 309,
                            "end": 316,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 311,
                              "end": 316,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 311,
                                "end": 314
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 318,
                        "end": 322,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 321,
                          "end": 322,
                          "typeName": {
                            "type": "Identifier",
                            "start": 321,
                            "end": 322,
                            "decorators": [],
                            "name": "A",
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
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 329,
              "end": 384,
              "key": {
                "type": "Identifier",
                "start": 329,
                "end": 337,
                "decorators": [],
                "name": "register",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 338,
                  "end": 382,
                  "decorators": [],
                  "name": "inputClass",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 348,
                    "end": 382,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 350,
                      "end": 382,
                      "elementType": {
                        "type": "TSTypeLiteral",
                        "start": 350,
                        "end": 380,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 352,
                            "end": 378,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 357,
                                "end": 373,
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "start": 360,
                                  "end": 366,
                                  "decorators": [],
                                  "name": "params",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 366,
                                  "end": 373,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 368,
                                    "end": 373,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 368,
                                      "end": 371
                                    }
                                  }
                                },
                                "value": null
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 374,
                              "end": 377,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 376,
                                "end": 377,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 376,
                                  "end": 377,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 389,
      "end": 401,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 393,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 393,
            "end": 400,
            "decorators": [],
            "name": "reg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 400,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 398,
                "end": 400,
                "typeName": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 400,
                  "decorators": [],
                  "name": "I1",
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
      "start": 402,
      "end": 418,
      "expression": {
        "type": "CallExpression",
        "start": 402,
        "end": 417,
        "callee": {
          "type": "MemberExpression",
          "start": 402,
          "end": 414,
          "object": {
            "type": "Identifier",
            "start": 402,
            "end": 405,
            "decorators": [],
            "name": "reg",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 406,
            "end": 414,
            "decorators": [],
            "name": "register",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 415,
            "end": 416,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
