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
        "name": "Root",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                    "attributes": [],
                    "exportKind": "type"
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
                        "name": "Utils",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                                "name": "mirror",
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
                                  "start": 208,
                                  "end": 212,
                                  "name": "p",
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
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 241,
                                            "end": 242,
                                            "name": "x",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "MemberExpression",
                                            "start": 244,
                                            "end": 247,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 244,
                                              "end": 245,
                                              "name": "p",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 246,
                                              "end": 247,
                                              "name": "y",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          },
                                          "kind": "init",
                                          "optional": false
                                        },
                                        {
                                          "type": "Property",
                                          "start": 249,
                                          "end": 255,
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 249,
                                            "end": 250,
                                            "name": "y",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "MemberExpression",
                                            "start": 252,
                                            "end": 255,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 252,
                                              "end": 253,
                                              "name": "p",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 254,
                                              "end": 255,
                                              "name": "x",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
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
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 201,
                                      "end": 206,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 201,
                                        "end": 206,
                                        "name": "Point",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                              "returnType": null
                            },
                            "specifiers": [],
                            "source": null,
                            "attributes": [],
                            "exportKind": "value"
                          }
                        ]
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "otherRoot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 122,
                          "end": 159,
                          "id": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 142,
                            "name": "Origin",
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
                                      "name": "Root",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 135,
                                      "end": 136,
                                      "name": "A",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 137,
                                    "end": 142,
                                    "name": "Point",
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
                          "init": {
                            "type": "ObjectExpression",
                            "start": 145,
                            "end": 159,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 147,
                                "end": 151,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 147,
                                  "end": 148,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 150,
                                  "end": 151,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 153,
                                "end": 157,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 153,
                                  "end": 154,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 156,
                                  "end": 157,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
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
                        "name": "Utils",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "id": {
                                "type": "Identifier",
                                "start": 217,
                                "end": 222,
                                "name": "Plane",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "superClass": null,
                              "body": {
                                "type": "ClassBody",
                                "start": 223,
                                "end": 320,
                                "body": [
                                  {
                                    "type": "MethodDefinition",
                                    "start": 241,
                                    "end": 306,
                                    "static": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 241,
                                      "end": 252,
                                      "name": "constructor",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "kind": "constructor",
                                    "value": {
                                      "type": "FunctionExpression",
                                      "start": 252,
                                      "end": 306,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
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
                                            "name": "tl",
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
                                                      "name": "Root",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "start": 269,
                                                      "end": 270,
                                                      "name": "A",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "start": 271,
                                                    "end": 276,
                                                    "name": "Point",
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
                                            "name": "br",
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
                                                      "name": "Root",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "start": 294,
                                                      "end": 295,
                                                      "name": "A",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    }
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "start": 296,
                                                    "end": 301,
                                                    "name": "Point",
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
                                          "readonly": false,
                                          "static": false
                                        }
                                      ],
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 303,
                                        "end": 306,
                                        "body": []
                                      },
                                      "declare": false,
                                      "typeParameters": null,
                                      "returnType": null
                                    },
                                    "decorators": [],
                                    "override": false,
                                    "optional": false,
                                    "accessibility": null
                                  }
                                ]
                              },
                              "decorators": [],
                              "typeParameters": null,
                              "implements": [],
                              "abstract": false,
                              "declare": false,
                              "superTypeArguments": null
                            },
                            "specifiers": [],
                            "source": null,
                            "attributes": [],
                            "exportKind": "value"
                          }
                        ]
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
