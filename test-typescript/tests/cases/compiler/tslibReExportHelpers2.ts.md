/node_modules/tslib/index.d.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 161,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 46,
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false
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
                  "optional": false
                }
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 98,
                      "decorators": [],
                      "name": "has",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
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
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 115,
                    "end": 139,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 118,
                      "decorators": [],
                      "name": "get",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
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
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                              "optional": false
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 130,
                            "end": 139
                          }
                        ]
                      }
                    },
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
                  "raw": "\"f\"",
                  "value": "f"
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
              "optional": false
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 46,
          "end": 67,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 47,
              "end": 63,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 57,
                "end": 63
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 65,
              "end": 66,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "V",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 162,
      "end": 319,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 169,
        "end": 319,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 186,
          "end": 208,
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false
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
                  "optional": false
                }
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
                  "optional": false
                }
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
                  "raw": "\"f\"",
                  "value": "f"
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
                    "key": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 308,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "optional": false
                        }
                      }
                    }
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
              "optional": false
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 208,
          "end": 254,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 209,
              "end": 250,
              "const": false,
              "constraint": {
                "type": "TSConstructorType",
                "start": 219,
                "end": 250,
                "abstract": false,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 224,
                    "end": 238,
                    "argument": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 231,
                      "decorators": [],
                      "name": "args",
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
                    }
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
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 252,
              "end": 253,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "decorators": [],
                "name": "V",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
