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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "name": "Underscore",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 267,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 109,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 31,
              "end": 109,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 49,
                "name": "Iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 49,
                "end": 55,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 50,
                    "end": 51,
                    "name": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 53,
                    "end": 54,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "name": "U",
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
              "body": {
                "type": "TSInterfaceBody",
                "start": 56,
                "end": 109,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 66,
                    "end": 103,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 75,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 72,
                          "end": 75,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 74,
                            "end": 75,
                            "typeName": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 75,
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
                        "start": 77,
                        "end": 87,
                        "name": "index",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 82,
                          "end": 87,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 84,
                            "end": 87
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 89,
                        "end": 98,
                        "name": "list",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 98,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 95,
                            "end": 98
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
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
            "type": "ExportNamedDeclaration",
            "start": 116,
            "end": 265,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 123,
              "end": 265,
              "id": {
                "type": "Identifier",
                "start": 133,
                "end": 139,
                "name": "Static",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 140,
                "end": 265,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 150,
                    "end": 225,
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 153,
                      "name": "all",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 153,
                      "end": 156,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 154,
                          "end": 155,
                          "name": {
                            "type": "Identifier",
                            "start": 154,
                            "end": 155,
                            "name": "T",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 157,
                        "end": 166,
                        "name": "list",
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 163,
                                "end": 164,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 168,
                        "end": 199,
                        "name": "iterator",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 177,
                          "end": 199,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 179,
                            "end": 199,
                            "typeName": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 187,
                              "name": "Iterator",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 187,
                              "end": 199,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 188,
                                  "end": 189,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 188,
                                    "end": 189,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 191,
                                  "end": 198
                                }
                              ]
                            }
                          }
                        },
                        "decorators": [],
                        "optional": true
                      },
                      {
                        "type": "Identifier",
                        "start": 201,
                        "end": 214,
                        "name": "context",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 209,
                          "end": 214,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 211,
                            "end": 214
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 234,
                    "end": 259,
                    "key": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 242,
                      "name": "identity",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 242,
                      "end": 245,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 243,
                          "end": 244,
                          "name": {
                            "type": "Identifier",
                            "start": 243,
                            "end": 244,
                            "name": "T",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 246,
                        "end": 254,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 251,
                          "end": 254,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 253,
                            "end": 254,
                            "typeName": {
                              "type": "Identifier",
                              "start": 253,
                              "end": 254,
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
                      "start": 255,
                      "end": 258,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 257,
                        "end": 258,
                        "typeName": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 258,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 302,
            "name": "_",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 285,
                "end": 302,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 285,
                  "end": 302,
                  "left": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 295,
                    "name": "Underscore",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 302,
                    "name": "Static",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 571,
      "end": 613,
      "expression": {
        "type": "CallExpression",
        "start": 571,
        "end": 612,
        "callee": {
          "type": "MemberExpression",
          "start": 571,
          "end": 576,
          "object": {
            "type": "Identifier",
            "start": 571,
            "end": 572,
            "name": "_",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 573,
            "end": 576,
            "name": "all",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 584,
                "end": 585,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 587,
                "end": 591,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Literal",
                "start": 593,
                "end": 598,
                "value": "yes",
                "raw": "'yes'"
              }
            ]
          },
          {
            "type": "MemberExpression",
            "start": 601,
            "end": 611,
            "object": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 603,
              "end": 611,
              "name": "identity",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
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
      "start": 667,
      "end": 693,
      "expression": {
        "type": "CallExpression",
        "start": 667,
        "end": 692,
        "callee": {
          "type": "MemberExpression",
          "start": 667,
          "end": 672,
          "object": {
            "type": "Identifier",
            "start": 667,
            "end": 668,
            "name": "_",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 669,
            "end": 672,
            "name": "all",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
                "value": true,
                "raw": "true"
              }
            ]
          },
          {
            "type": "MemberExpression",
            "start": 681,
            "end": 691,
            "object": {
              "type": "Identifier",
              "start": 681,
              "end": 682,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 683,
              "end": 691,
              "name": "identity",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
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
