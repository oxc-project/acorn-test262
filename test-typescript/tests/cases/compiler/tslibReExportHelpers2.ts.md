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
          "name": "__classPrivateFieldGet",
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
            "start": 71,
            "end": 82,
            "name": "receiver",
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
                  "name": "T",
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
            "start": 86,
            "end": 141,
            "name": "state",
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
                      "name": "has",
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
                        "start": 99,
                        "end": 103,
                        "name": "o",
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
                              "name": "T",
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
                      "name": "get",
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
                        "start": 119,
                        "end": 123,
                        "name": "o",
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
                              "name": "T",
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
                              "name": "V",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 145,
            "end": 155,
            "name": "kind",
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
            },
            "decorators": [],
            "optional": true
          }
        ],
        "body": null,
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "V",
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
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
          "name": "__classPrivateFieldGet",
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
            "start": 258,
            "end": 269,
            "name": "receiver",
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
                  "name": "T",
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
            "start": 273,
            "end": 281,
            "name": "state",
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
                  "name": "T",
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
            "start": 285,
            "end": 294,
            "name": "kind",
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
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 298,
            "end": 313,
            "name": "f",
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
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "argument": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 231,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
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
                "name": "V",
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
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
