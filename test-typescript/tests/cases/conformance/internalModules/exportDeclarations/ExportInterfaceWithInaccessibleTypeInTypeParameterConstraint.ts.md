__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 399,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 399,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 399,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 16,
            "end": 77,
            "body": {
              "type": "TSInterfaceBody",
              "start": 32,
              "end": 77,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 42,
                  "end": 52,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 45,
                      "end": 51
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 61,
                  "end": 71,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 125,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 90,
              "end": 125,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 94,
                  "end": 124,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 107,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 107,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 102,
                        "end": 107,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 107,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 110,
                    "end": 124,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 112,
                        "end": 116,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 113,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 115,
                          "end": 116,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      {
                        "type": "Property",
                        "start": 118,
                        "end": 122,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 119,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 121,
                          "end": 122,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 131,
            "end": 196,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 138,
              "end": 196,
              "body": {
                "type": "TSInterfaceBody",
                "start": 170,
                "end": 196,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 180,
                    "end": 190,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 181,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 183,
                        "end": 189
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 164,
                  "end": 169,
                  "expression": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 169,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 148,
                "end": 155,
                "decorators": [],
                "name": "Point3d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 202,
            "end": 254,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 209,
              "end": 254,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 213,
                  "end": 253,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 230,
                    "decorators": [],
                    "name": "Origin3d",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 221,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 223,
                        "end": 230,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 223,
                          "end": 230,
                          "decorators": [],
                          "name": "Point3d",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 233,
                    "end": 253,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 235,
                        "end": 239,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 236,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 238,
                          "end": 239,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      {
                        "type": "Property",
                        "start": 241,
                        "end": 245,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 242,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 244,
                          "end": 245,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      {
                        "type": "Property",
                        "start": 247,
                        "end": 251,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 248,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 250,
                          "end": 251,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 260,
            "end": 397,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 267,
              "end": 397,
              "body": {
                "type": "TSInterfaceBody",
                "start": 303,
                "end": 397,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 313,
                    "end": 346,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 318,
                        "end": 331,
                        "decorators": [],
                        "name": "start",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 323,
                          "end": 331,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 325,
                            "end": 331,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 325,
                              "end": 331,
                              "decorators": [],
                              "name": "TPoint",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 333,
                        "end": 344,
                        "decorators": [],
                        "name": "end",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 336,
                          "end": 344,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 338,
                            "end": 344,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 338,
                              "end": 344,
                              "decorators": [],
                              "name": "TPoint",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 356,
                    "end": 370,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 356,
                      "end": 361,
                      "decorators": [],
                      "name": "start",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 361,
                      "end": 369,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 363,
                        "end": 369,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 363,
                          "end": 369,
                          "decorators": [],
                          "name": "TPoint",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 379,
                    "end": 391,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 382,
                      "decorators": [],
                      "name": "end",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 390,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 384,
                        "end": 390,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 390,
                          "decorators": [],
                          "name": "TPoint",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 277,
                "end": 281,
                "decorators": [],
                "name": "Line",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 281,
                "end": 303,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 282,
                    "end": 302,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 297,
                      "end": 302,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 302,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 288,
                      "decorators": [],
                      "name": "TPoint",
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
