__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 694,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 267,
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 267,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 109,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 31,
              "end": 109,
              "body": {
                "type": "TSInterfaceBody",
                "start": 56,
                "end": 109,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 66,
                    "end": 103,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 75,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 72,
                          "end": 75,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 74,
                            "end": 75,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 75,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 77,
                        "end": 87,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 82,
                          "end": 87,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 84,
                            "end": 87
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 89,
                        "end": 98,
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 98,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 95,
                            "end": 98
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 99,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 101,
                        "end": 102,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 49,
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 49,
                "end": 55,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 50,
                    "end": 51,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 53,
                    "end": 54,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 116,
            "end": 265,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 123,
              "end": 265,
              "body": {
                "type": "TSInterfaceBody",
                "start": 140,
                "end": 265,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 150,
                    "end": 225,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 153,
                      "decorators": [],
                      "name": "all",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 157,
                        "end": 166,
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 161,
                          "end": 166,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 163,
                            "end": 166,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 163,
                              "end": 164,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 163,
                                "end": 164,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 168,
                        "end": 199,
                        "decorators": [],
                        "name": "iterator",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 177,
                          "end": 199,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 179,
                            "end": 199,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 187,
                              "end": 199,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 188,
                                  "end": 189,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 188,
                                    "end": 189,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 191,
                                  "end": 198
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 187,
                              "decorators": [],
                              "name": "Iterator",
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
                        "name": "context",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 209,
                          "end": 214,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 211,
                            "end": 214
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 215,
                      "end": 224,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 217,
                        "end": 224
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 153,
                      "end": 156,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 154,
                          "end": 155,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 155,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 234,
                    "end": 259,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 242,
                      "decorators": [],
                      "name": "identity",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 246,
                        "end": 254,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 251,
                          "end": 254,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 253,
                            "end": 254,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 253,
                              "end": 254,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 255,
                      "end": 258,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 257,
                        "end": 258,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 258,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 242,
                      "end": 245,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 243,
                          "end": 244,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 243,
                            "end": 244,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 133,
                "end": 139,
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "Underscore",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 302,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 302,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 285,
                "end": 302,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 285,
                  "end": 302,
                  "left": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 295,
                    "decorators": [],
                    "name": "Underscore",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 302,
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 571,
      "end": 613,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 571,
        "end": 612,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 577,
            "end": 599,
            "elements": [
              {
                "type": "Literal",
                "start": 578,
                "end": 582,
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 584,
                "end": 585,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 587,
                "end": 591,
                "raw": "null",
                "value": null
              },
              {
                "type": "Literal",
                "start": 593,
                "end": 598,
                "raw": "'yes'",
                "value": "yes"
              }
            ]
          },
          {
            "type": "MemberExpression",
            "start": 601,
            "end": 611,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 603,
              "end": 611,
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 571,
          "end": 576,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 571,
            "end": 572,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 573,
            "end": 576,
            "decorators": [],
            "name": "all",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 667,
      "end": 693,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 667,
        "end": 692,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 673,
            "end": 679,
            "elements": [
              {
                "type": "Literal",
                "start": 674,
                "end": 678,
                "raw": "true",
                "value": true
              }
            ]
          },
          {
            "type": "MemberExpression",
            "start": 681,
            "end": 691,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 681,
              "end": 682,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 683,
              "end": 691,
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 667,
          "end": 672,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 667,
            "end": 668,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 669,
            "end": 672,
            "decorators": [],
            "name": "all",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
