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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Root",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 290,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 288,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 25,
              "end": 288,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 34,
                "end": 288,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 44,
                    "end": 124,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 51,
                      "end": 124,
                      "id": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 66,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 67,
                        "end": 124,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 81,
                            "end": 91,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 81,
                              "end": 82,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 82,
                              "end": 90,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 84,
                                "end": 90
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 104,
                            "end": 114,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 105,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 105,
                              "end": 113,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 107,
                                "end": 113
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 134,
                    "end": 282,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 141,
                      "end": 282,
                      "id": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 153,
                        "decorators": [],
                        "name": "Utils",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 154,
                        "end": 282,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 168,
                            "end": 272,
                            "declaration": {
                              "type": "FunctionDeclaration",
                              "start": 175,
                              "end": 272,
                              "id": {
                                "type": "Identifier",
                                "start": 184,
                                "end": 190,
                                "decorators": [],
                                "name": "mirror",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 190,
                                "end": 207,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 191,
                                    "end": 206,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 191,
                                      "end": 192,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 201,
                                      "end": 206,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 201,
                                        "end": 206,
                                        "decorators": [],
                                        "name": "Point",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    },
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
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 211,
                                        "end": 212,
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
                              "returnType": null,
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
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 241,
                                            "end": 242,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "MemberExpression",
                                            "start": 244,
                                            "end": 247,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 244,
                                              "end": 245,
                                              "decorators": [],
                                              "name": "p",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 246,
                                              "end": 247,
                                              "decorators": [],
                                              "name": "y",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false
                                        },
                                        {
                                          "type": "Property",
                                          "start": 249,
                                          "end": 255,
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "start": 249,
                                            "end": 250,
                                            "decorators": [],
                                            "name": "y",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "value": {
                                            "type": "MemberExpression",
                                            "start": 252,
                                            "end": 255,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 252,
                                              "end": 253,
                                              "decorators": [],
                                              "name": "p",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 254,
                                              "end": 255,
                                              "decorators": [],
                                              "name": "x",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": []
                          }
                        ]
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 16,
        "decorators": [],
        "name": "otherRoot",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 338,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 336,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 30,
              "end": 336,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 39,
                "end": 336,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 111,
                    "end": 160,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 118,
                      "end": 160,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 122,
                          "end": 159,
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
                                },
                                "typeArguments": null
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
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 147,
                                  "end": 148,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 150,
                                  "end": 151,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 153,
                                "end": 157,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 153,
                                  "end": 154,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 156,
                                  "end": 157,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 170,
                    "end": 330,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 177,
                      "end": 330,
                      "id": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 189,
                        "decorators": [],
                        "name": "Utils",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 190,
                        "end": 330,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 204,
                            "end": 320,
                            "declaration": {
                              "type": "ClassDeclaration",
                              "start": 211,
                              "end": 320,
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
                              "typeParameters": null,
                              "superClass": null,
                              "superTypeArguments": null,
                              "implements": [],
                              "body": {
                                "type": "ClassBody",
                                "start": 223,
                                "end": 320,
                                "body": [
                                  {
                                    "type": "MethodDefinition",
                                    "start": 241,
                                    "end": 306,
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
                                    "value": {
                                      "type": "FunctionExpression",
                                      "start": 252,
                                      "end": 306,
                                      "id": null,
                                      "generator": false,
                                      "async": false,
                                      "declare": false,
                                      "typeParameters": null,
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
                                                },
                                                "typeArguments": null
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
                                                },
                                                "typeArguments": null
                                              }
                                            }
                                          },
                                          "readonly": false,
                                          "static": false
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 303,
                                        "end": 306,
                                        "body": []
                                      },
                                      "expression": false
                                    },
                                    "kind": "constructor",
                                    "computed": false,
                                    "static": false,
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
                        ]
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
