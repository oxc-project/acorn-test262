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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 36,
        "name": "Type",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 37,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 75,
        "name": "TypeExt",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 84,
          "end": 88,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "name": "Type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 107,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 105,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 102,
                    "name": "Type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
            "name": "guard",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 123,
            "end": 168,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 124,
                "end": 133,
                "name": "arg",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 127,
                  "end": 133,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 129,
                    "end": 133,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 133,
                      "name": "Type",
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
              "type": "BinaryExpression",
              "start": 154,
              "end": 168,
              "left": {
                "type": "MemberExpression",
                "start": 154,
                "end": 162,
                "object": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 162,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 167,
                "end": 168,
                "value": 1,
                "raw": "1"
              }
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 136,
                "end": 150,
                "parameterName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 139,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 143,
                  "end": 150,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 143,
                    "end": 150,
                    "typeName": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 150,
                      "name": "TypeExt",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 185,
            "name": "otherFunc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 188,
            "end": 227,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 189,
                "end": 199,
                "name": "arg1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 193,
                  "end": 199,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 195,
                    "end": 199,
                    "typeName": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 199,
                      "name": "Type",
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
              {
                "type": "Identifier",
                "start": 201,
                "end": 214,
                "name": "arg2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 205,
                  "end": 214,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 207,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 214,
                      "name": "TypeExt",
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
              "start": 225,
              "end": 227,
              "body": []
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 221,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 217,
                "end": 221
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 230,
      "end": 374,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 237,
        "end": 374,
        "id": {
          "type": "Identifier",
          "start": 246,
          "end": 247,
          "name": "y",
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
            "start": 248,
            "end": 257,
            "name": "arg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 257,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 257,
                  "name": "Type",
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
          "start": 265,
          "end": 374,
          "body": [
            {
              "type": "IfStatement",
              "start": 269,
              "end": 372,
              "test": {
                "type": "CallExpression",
                "start": 273,
                "end": 283,
                "callee": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 278,
                  "name": "guard",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 279,
                    "end": 282,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
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
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 296,
                      "end": 306,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 302,
                          "end": 306,
                          "id": {
                            "type": "Identifier",
                            "start": 302,
                            "end": 306,
                            "name": "ITEM",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "const",
                      "declare": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 310,
                      "end": 317,
                      "object": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 313,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 317,
                        "name": "arr",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 319,
                      "end": 368,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 327,
                          "end": 362,
                          "test": {
                            "type": "CallExpression",
                            "start": 331,
                            "end": 351,
                            "callee": {
                              "type": "Identifier",
                              "start": 331,
                              "end": 340,
                              "name": "otherFunc",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 341,
                                "end": 345,
                                "name": "ITEM",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 347,
                                "end": 350,
                                "name": "arg",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 353,
                            "end": 362,
                            "body": []
                          },
                          "alternate": null
                        }
                      ]
                    }
                  }
                ]
              },
              "alternate": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 258,
          "end": 264,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 260,
            "end": 264
          }
        }
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
