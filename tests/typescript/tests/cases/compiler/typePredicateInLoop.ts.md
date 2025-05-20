__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 374,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 56,
      "body": {
        "type": "TSInterfaceBody",
        "start": 37,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 36,
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 107,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 107,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 105,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 98,
                "end": 104,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 98,
                  "end": 102,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 102,
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 84,
          "end": 88,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 75,
        "decorators": [],
        "name": "TypeExt",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
            "decorators": [],
            "name": "guard",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 123,
            "end": 168,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 154,
              "end": 168,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 154,
                "end": 162,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 162,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 167,
                "end": 168,
                "raw": "1",
                "value": 1
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 124,
                "end": 133,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 127,
                  "end": 133,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 129,
                    "end": 133,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 133,
                      "decorators": [],
                      "name": "Type",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 136,
                "end": 150,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 139,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 143,
                  "end": 150,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 143,
                    "end": 150,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 150,
                      "decorators": [],
                      "name": "TypeExt",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 185,
            "decorators": [],
            "name": "otherFunc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 188,
            "end": 227,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 225,
              "end": 227,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 189,
                "end": 199,
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 193,
                  "end": 199,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 195,
                    "end": 199,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 199,
                      "decorators": [],
                      "name": "Type",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 201,
                "end": 214,
                "decorators": [],
                "name": "arg2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 205,
                  "end": 214,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 207,
                    "end": 214,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 214,
                      "decorators": [],
                      "name": "TypeExt",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 221,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 217,
                "end": 221
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 230,
      "end": 374,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 237,
        "end": 374,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 265,
          "end": 374,
          "body": [
            {
              "type": "IfStatement",
              "start": 269,
              "end": 372,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 285,
                "end": 372,
                "body": [
                  {
                    "type": "ForOfStatement",
                    "start": 291,
                    "end": 368,
                    "await": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 319,
                      "end": 368,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 327,
                          "end": 362,
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 353,
                            "end": 362,
                            "body": []
                          },
                          "test": {
                            "type": "CallExpression",
                            "start": 331,
                            "end": 351,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 341,
                                "end": 345,
                                "decorators": [],
                                "name": "ITEM",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 347,
                                "end": 350,
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 331,
                              "end": 340,
                              "decorators": [],
                              "name": "otherFunc",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 296,
                      "end": 306,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 302,
                          "end": 306,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 302,
                            "end": 306,
                            "decorators": [],
                            "name": "ITEM",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 310,
                      "end": 317,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 313,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 317,
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "CallExpression",
                "start": 273,
                "end": 283,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 279,
                    "end": 282,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 278,
                  "decorators": [],
                  "name": "guard",
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
          "start": 246,
          "end": 247,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 248,
            "end": 257,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 257,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 257,
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 258,
          "end": 264,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 260,
            "end": 264
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
