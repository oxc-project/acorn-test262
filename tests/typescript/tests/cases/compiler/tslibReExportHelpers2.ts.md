__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 320,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 161,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 161,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 46,
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 46,
          "end": 67,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 47,
              "end": 63,
              "name": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 57,
                "end": 63
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 65,
              "end": 66,
              "name": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "V",
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
            "start": 71,
            "end": 82,
            "decorators": [],
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 82,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 86,
            "end": 141,
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 93,
                "end": 141,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 95,
                    "end": 114,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 98,
                      "decorators": [],
                      "name": "has",
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
                        "start": 99,
                        "end": 103,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 100,
                          "end": 103,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 102,
                            "end": 103,
                            "typeName": {
                              "type": "Identifier",
                              "start": 102,
                              "end": 103,
                              "decorators": [],
                              "name": "T",
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
                      "start": 104,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 106,
                        "end": 113
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 115,
                    "end": 139,
                    "key": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 118,
                      "decorators": [],
                      "name": "get",
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
                        "start": 119,
                        "end": 123,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 120,
                          "end": 123,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 122,
                            "end": 123,
                            "typeName": {
                              "type": "Identifier",
                              "start": 122,
                              "end": 123,
                              "decorators": [],
                              "name": "T",
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
                      "start": 124,
                      "end": 139,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 126,
                        "end": 139,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 126,
                            "end": 127,
                            "typeName": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 127,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 130,
                            "end": 139
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 145,
            "end": 155,
            "decorators": [],
            "name": "kind",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 155,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 152,
                "end": 155,
                "literal": {
                  "type": "Literal",
                  "start": 152,
                  "end": 155,
                  "value": "f",
                  "raw": "\"f\""
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 157,
          "end": 160,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 159,
            "end": 160,
            "typeName": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 162,
      "end": 319,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 169,
        "end": 319,
        "id": {
          "type": "Identifier",
          "start": 186,
          "end": 208,
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 208,
          "end": 254,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 209,
              "end": 250,
              "name": {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSConstructorType",
                "start": 219,
                "end": 250,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 224,
                    "end": 238,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 231,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 231,
                      "end": 238,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 233,
                        "end": 238,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 233,
                          "end": 236
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 240,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 243,
                    "end": 250
                  }
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 252,
              "end": 253,
              "name": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "decorators": [],
                "name": "V",
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
            "start": 258,
            "end": 269,
            "decorators": [],
            "name": "receiver",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 269,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 269,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 273,
            "end": 281,
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 281,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 285,
            "end": 294,
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 294,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 291,
                "end": 294,
                "literal": {
                  "type": "Literal",
                  "start": 291,
                  "end": 294,
                  "value": "f",
                  "raw": "\"f\""
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 298,
            "end": 313,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 313,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 301,
                "end": 313,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 303,
                    "end": 311,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 308,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 308,
                      "end": 311,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 310,
                        "end": 311,
                        "typeName": {
                          "type": "Identifier",
                          "start": 310,
                          "end": 311,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 315,
          "end": 318,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 317,
            "end": 318,
            "typeName": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 52,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 31,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 31,
            "decorators": [],
            "name": "__classPrivateFieldGet",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 31,
            "decorators": [],
            "name": "__classPrivateFieldGet",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 51,
        "value": "./index.js",
        "raw": "\"./index.js\""
      },
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 118,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 118,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 118,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 70,
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
                "end": 70,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 35,
                  "end": 70,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 41,
                      "end": 66,
                      "expression": {
                        "type": "CallExpression",
                        "start": 41,
                        "end": 65,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 41,
                          "end": 52,
                          "object": {
                            "type": "Identifier",
                            "start": 41,
                            "end": 48,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 49,
                            "end": 52,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 53,
                            "end": 64,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 53,
                              "end": 62,
                              "object": {
                                "type": "Identifier",
                                "start": 53,
                                "end": 56,
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 57,
                                "end": 62,
                                "name": "test"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        ],
                        "optional": false
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
            },
            {
              "type": "MethodDefinition",
              "start": 74,
              "end": 116,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 81,
                "end": 86,
                "name": "test"
              },
              "value": {
                "type": "FunctionExpression",
                "start": 86,
                "end": 116,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 89,
                  "end": 116,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 95,
                      "end": 112,
                      "argument": {
                        "type": "Literal",
                        "start": 102,
                        "end": 111,
                        "value": "success",
                        "raw": "'success'"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
