__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 419,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 44,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 44,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 42,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 32,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 32,
                "end": 42,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 33,
                    "end": 37,
                    "name": "ctor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 39,
                  "end": 42,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 247,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 53,
        "end": 247,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 247,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 77,
              "end": 96,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 85,
                "end": 87,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 101,
              "end": 120,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 109,
                "end": 111,
                "name": "p2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 126,
              "end": 245,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 126,
                "end": 137,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 137,
                "end": 245,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 138,
                    "end": 150,
                    "name": "element",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 147,
                        "end": 150
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 152,
                    "end": 163,
                    "name": "url",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 155,
                      "end": 163,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 157,
                        "end": 163
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 180,
                            "end": 187,
                            "name": "element",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
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
                            "name": "p1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 215,
                          "name": "element",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "p2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 238,
                          "name": "url",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "I1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "register",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "inputClass",
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
                          "argument": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 309,
                            "name": "params",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "decorators": [],
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
                            "name": "A",
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
                "name": "register",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "inputClass",
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
                                "argument": {
                                  "type": "Identifier",
                                  "start": 360,
                                  "end": 366,
                                  "name": "params",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "decorators": [],
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
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 389,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 393,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 393,
            "end": 400,
            "name": "reg",
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
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "reg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 406,
            "end": 414,
            "name": "register",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 415,
            "end": 416,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
