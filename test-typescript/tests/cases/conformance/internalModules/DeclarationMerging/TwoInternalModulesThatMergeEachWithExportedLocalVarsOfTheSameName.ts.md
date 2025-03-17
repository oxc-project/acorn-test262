__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 279,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 278,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 278,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 278,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 90,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 29,
                "end": 90,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 45,
                  "end": 90,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 55,
                      "end": 65,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
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
                        "start": 56,
                        "end": 64,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 58,
                          "end": 64
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 74,
                      "end": 84,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
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
                        "start": 75,
                        "end": 83,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 77,
                          "end": 83
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 44,
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
              "start": 96,
              "end": 228,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 103,
                "end": 228,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 116,
                  "end": 228,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 126,
                      "end": 222,
                      "attributes": [],
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "start": 133,
                        "end": 222,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 172,
                          "end": 222,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 186,
                              "end": 212,
                              "argument": {
                                "type": "ObjectExpression",
                                "start": 193,
                                "end": 211,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 195,
                                    "end": 201,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 195,
                                      "end": 196,
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
                                      "start": 198,
                                      "end": 201,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 198,
                                        "end": 199,
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 200,
                                        "end": 201,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  },
                                  {
                                    "type": "Property",
                                    "start": 203,
                                    "end": 209,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 203,
                                      "end": 204,
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
                                      "start": 206,
                                      "end": 209,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 206,
                                        "end": 207,
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 208,
                                        "end": 209,
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
                          "start": 142,
                          "end": 148,
                          "decorators": [],
                          "name": "mirror",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 166,
                            "end": 170,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 167,
                              "end": 170,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 169,
                                "end": 170,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 169,
                                  "end": 170,
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
                          "start": 148,
                          "end": 165,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 149,
                              "end": 164,
                              "const": false,
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 159,
                                "end": 164,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 159,
                                  "end": 164,
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
                                "start": 149,
                                "end": 150,
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
                  "start": 110,
                  "end": 115,
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 234,
              "end": 276,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 241,
                "end": 276,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 245,
                    "end": 275,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 258,
                      "decorators": [],
                      "name": "Origin",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 251,
                        "end": 258,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 253,
                          "end": 258,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 253,
                            "end": 258,
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
                      "start": 261,
                      "end": 275,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 263,
                          "end": 267,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 264,
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
                            "start": 266,
                            "end": 267,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 269,
                          "end": 273,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 269,
                            "end": 270,
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
                            "start": 272,
                            "end": 273,
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
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
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
  "end": 269,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 268,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 268,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 268,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 88,
              "end": 130,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 95,
                "end": 130,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 99,
                    "end": 129,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 112,
                      "decorators": [],
                      "name": "Origin",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 105,
                        "end": 112,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 107,
                          "end": 112,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 112,
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
                      "start": 115,
                      "end": 129,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 117,
                          "end": 121,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 117,
                            "end": 118,
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
                            "start": 120,
                            "end": 121,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 123,
                          "end": 127,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 124,
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
                            "start": 126,
                            "end": 127,
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
              "start": 136,
              "end": 266,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 143,
                "end": 266,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 156,
                  "end": 266,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 166,
                      "end": 260,
                      "attributes": [],
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 173,
                        "end": 260,
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "start": 185,
                          "end": 260,
                          "body": [
                            {
                              "type": "MethodDefinition",
                              "start": 199,
                              "end": 250,
                              "accessibility": null,
                              "computed": false,
                              "decorators": [],
                              "key": {
                                "type": "Identifier",
                                "start": 199,
                                "end": 210,
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
                                "start": 210,
                                "end": 250,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 247,
                                  "end": 250,
                                  "body": []
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "TSParameterProperty",
                                    "start": 211,
                                    "end": 227,
                                    "accessibility": "public",
                                    "decorators": [],
                                    "override": false,
                                    "parameter": {
                                      "type": "Identifier",
                                      "start": 218,
                                      "end": 227,
                                      "decorators": [],
                                      "name": "tl",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 220,
                                        "end": 227,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 222,
                                          "end": 227,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 222,
                                            "end": 227,
                                            "decorators": [],
                                            "name": "Point",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      }
                                    },
                                    "readonly": false,
                                    "static": false
                                  },
                                  {
                                    "type": "TSParameterProperty",
                                    "start": 229,
                                    "end": 245,
                                    "accessibility": "public",
                                    "decorators": [],
                                    "override": false,
                                    "parameter": {
                                      "type": "Identifier",
                                      "start": 236,
                                      "end": 245,
                                      "decorators": [],
                                      "name": "br",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 238,
                                        "end": 245,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 240,
                                          "end": 245,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 240,
                                            "end": 245,
                                            "decorators": [],
                                            "name": "Point",
                                            "optional": false,
                                            "typeAnnotation": null
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
                          "start": 179,
                          "end": 184,
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
                  "start": 150,
                  "end": 155,
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
          "start": 14,
          "end": 15,
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
