__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 291,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 290,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 290,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 288,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 25,
              "end": 288,
              "body": {
                "type": "TSModuleBlock",
                "start": 34,
                "end": 288,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 44,
                    "end": 124,
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 51,
                      "end": 124,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 67,
                        "end": 124,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 81,
                            "end": 91,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 81,
                              "end": 82,
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
                              "start": 82,
                              "end": 90,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 84,
                                "end": 90
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 104,
                            "end": 114,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 105,
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
                              "start": 105,
                              "end": 113,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 107,
                                "end": 113
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 66,
                        "decorators": [],
                        "name": "Point",
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
                    "start": 134,
                    "end": 282,
                    "attributes": [],
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 141,
                      "end": 282,
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 154,
                        "end": 282,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 168,
                            "end": 272,
                            "attributes": [],
                            "declaration": {
                              "type": "FunctionDeclaration",
                              "start": 175,
                              "end": 272,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 214,
                                "end": 272,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 232,
                                    "end": 258,
                                    "argument": {
                                      "type": "ObjectExpression",
                                      "start": 239,
                                      "end": 257,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 241,
                                          "end": 247,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 241,
                                            "end": 242,
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
                                            "type": "MemberExpression",
                                            "start": 244,
                                            "end": 247,
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 244,
                                              "end": 245,
                                              "decorators": [],
                                              "name": "p",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 246,
                                              "end": 247,
                                              "decorators": [],
                                              "name": "y",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        },
                                        {
                                          "type": "Property",
                                          "start": 249,
                                          "end": 255,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 249,
                                            "end": 250,
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
                                            "type": "MemberExpression",
                                            "start": 252,
                                            "end": 255,
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 252,
                                              "end": 253,
                                              "decorators": [],
                                              "name": "p",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 254,
                                              "end": 255,
                                              "decorators": [],
                                              "name": "x",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": {
                                "type": "Identifier",
                                "start": 184,
                                "end": 190,
                                "decorators": [],
                                "name": "mirror",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 208,
                                  "end": 212,
                                  "decorators": [],
                                  "name": "p",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 209,
                                    "end": 212,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 211,
                                      "end": 212,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 211,
                                        "end": 212,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": null,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 190,
                                "end": 207,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 191,
                                    "end": 206,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 201,
                                      "end": 206,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 201,
                                        "end": 206,
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
                                      "start": 191,
                                      "end": 192,
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
                            "exportKind": "value",
                            "source": null,
                            "specifiers": []
                          }
                        ]
                      },
                      "declare": false,
                      "global": false,
                      "id": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 153,
                        "decorators": [],
                        "name": "Utils",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "module"
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
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
        "end": 11,
        "decorators": [],
        "name": "Root",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
  "end": 338,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 338,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 338,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 336,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 30,
              "end": 336,
              "body": {
                "type": "TSModuleBlock",
                "start": 39,
                "end": 336,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 111,
                    "end": 160,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 118,
                      "end": 160,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 122,
                          "end": 159,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 142,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 128,
                              "end": 142,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 130,
                                "end": 142,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 130,
                                  "end": 142,
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "start": 130,
                                    "end": 136,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 130,
                                      "end": 134,
                                      "decorators": [],
                                      "name": "Root",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 135,
                                      "end": 136,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 137,
                                    "end": 142,
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "start": 145,
                            "end": 159,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 147,
                                "end": 151,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 147,
                                  "end": 148,
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
                                  "start": 150,
                                  "end": 151,
                                  "raw": "0",
                                  "value": 0,
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "Property",
                                "start": 153,
                                "end": 157,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 153,
                                  "end": 154,
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
                                  "start": 156,
                                  "end": 157,
                                  "raw": "0",
                                  "value": 0,
                                  "regex": null,
                                  "bigint": null
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
                    "start": 170,
                    "end": 330,
                    "attributes": [],
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 177,
                      "end": 330,
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 190,
                        "end": 330,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 204,
                            "end": 320,
                            "attributes": [],
                            "declaration": {
                              "type": "ClassDeclaration",
                              "start": 211,
                              "end": 320,
                              "abstract": false,
                              "body": {
                                "type": "ClassBody",
                                "start": 223,
                                "end": 320,
                                "body": [
                                  {
                                    "type": "MethodDefinition",
                                    "start": 241,
                                    "end": 306,
                                    "accessibility": null,
                                    "computed": false,
                                    "decorators": [],
                                    "key": {
                                      "type": "Identifier",
                                      "start": 241,
                                      "end": 252,
                                      "decorators": [],
                                      "name": "constructor",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "kind": "constructor",
                                    "optional": false,
                                    "override": false,
                                    "static": false,
                                    "value": {
                                      "type": "FunctionExpression",
                                      "start": 252,
                                      "end": 306,
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 303,
                                        "end": 306,
                                        "body": []
                                      },
                                      "declare": false,
                                      "expression": false,
                                      "generator": false,
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "TSParameterProperty",
                                          "start": 253,
                                          "end": 276,
                                          "accessibility": "public",
                                          "decorators": [],
                                          "override": false,
                                          "parameter": {
                                            "type": "Identifier",
                                            "start": 260,
                                            "end": 276,
                                            "decorators": [],
                                            "name": "tl",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 262,
                                              "end": 276,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 264,
                                                "end": 276,
                                                "typeArguments": null,
                                                "typeName": {
                                                  "type": "TSQualifiedName",
                                                  "start": 264,
                                                  "end": 276,
                                                  "left": {
                                                    "type": "TSQualifiedName",
                                                    "start": 264,
                                                    "end": 270,
                                                    "left": {
                                                      "type": "Identifier",
                                                      "start": 264,
                                                      "end": 268,
                                                      "decorators": [],
                                                      "name": "Root",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "start": 269,
                                                      "end": 270,
                                                      "decorators": [],
                                                      "name": "A",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "start": 271,
                                                    "end": 276,
                                                    "decorators": [],
                                                    "name": "Point",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "readonly": false,
                                          "static": false
                                        },
                                        {
                                          "type": "TSParameterProperty",
                                          "start": 278,
                                          "end": 301,
                                          "accessibility": "public",
                                          "decorators": [],
                                          "override": false,
                                          "parameter": {
                                            "type": "Identifier",
                                            "start": 285,
                                            "end": 301,
                                            "decorators": [],
                                            "name": "br",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 287,
                                              "end": 301,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 289,
                                                "end": 301,
                                                "typeArguments": null,
                                                "typeName": {
                                                  "type": "TSQualifiedName",
                                                  "start": 289,
                                                  "end": 301,
                                                  "left": {
                                                    "type": "TSQualifiedName",
                                                    "start": 289,
                                                    "end": 295,
                                                    "left": {
                                                      "type": "Identifier",
                                                      "start": 289,
                                                      "end": 293,
                                                      "decorators": [],
                                                      "name": "Root",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "start": 294,
                                                      "end": 295,
                                                      "decorators": [],
                                                      "name": "A",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "start": 296,
                                                    "end": 301,
                                                    "decorators": [],
                                                    "name": "Point",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "readonly": false,
                                          "static": false
                                        }
                                      ],
                                      "returnType": null,
                                      "typeParameters": null
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "decorators": [],
                              "id": {
                                "type": "Identifier",
                                "start": 217,
                                "end": 222,
                                "decorators": [],
                                "name": "Plane",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "implements": [],
                              "superClass": null,
                              "superTypeArguments": null,
                              "typeParameters": null
                            },
                            "exportKind": "value",
                            "source": null,
                            "specifiers": []
                          }
                        ]
                      },
                      "declare": false,
                      "global": false,
                      "id": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 189,
                        "decorators": [],
                        "name": "Utils",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "module"
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
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
        "end": 16,
        "decorators": [],
        "name": "otherRoot",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
