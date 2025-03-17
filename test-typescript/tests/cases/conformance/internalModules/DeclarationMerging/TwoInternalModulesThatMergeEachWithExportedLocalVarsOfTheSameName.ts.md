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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 278,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 278,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 90,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 29,
                "end": 90,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 44,
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 45,
                  "end": 90,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 55,
                      "end": 65,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 56,
                        "end": 64,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 58,
                          "end": 64
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 74,
                      "end": 84,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 75,
                        "end": 83,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 77,
                          "end": 83
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
              "start": 96,
              "end": 228,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 103,
                "end": 228,
                "id": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 115,
                  "name": "Utils",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 116,
                  "end": 228,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 126,
                      "end": 222,
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "start": 133,
                        "end": 222,
                        "id": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 148,
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
                            "start": 166,
                            "end": 170,
                            "name": "p",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 167,
                              "end": 170,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 169,
                                "end": 170,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 169,
                                  "end": 170,
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
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 195,
                                      "end": 196,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "MemberExpression",
                                      "start": 198,
                                      "end": 201,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 198,
                                        "end": 199,
                                        "name": "p",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 200,
                                        "end": 201,
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
                                    "start": 203,
                                    "end": 209,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 203,
                                      "end": 204,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "MemberExpression",
                                      "start": 206,
                                      "end": 209,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 206,
                                        "end": 207,
                                        "name": "p",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 208,
                                        "end": 209,
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
                          "start": 148,
                          "end": 165,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 149,
                              "end": 164,
                              "name": {
                                "type": "Identifier",
                                "start": 149,
                                "end": 150,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "start": 159,
                                "end": 164,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 159,
                                  "end": 164,
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 234,
              "end": 276,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 241,
                "end": 276,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 245,
                    "end": 275,
                    "id": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 258,
                      "name": "Origin",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 251,
                        "end": 258,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 253,
                          "end": 258,
                          "typeName": {
                            "type": "Identifier",
                            "start": 253,
                            "end": 258,
                            "name": "Point",
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
                    "init": {
                      "type": "ObjectExpression",
                      "start": 261,
                      "end": 275,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 263,
                          "end": 267,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 264,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 266,
                            "end": 267,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 269,
                          "end": 273,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 269,
                            "end": 270,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 272,
                            "end": 273,
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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 268,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 268,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 88,
              "end": 130,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 95,
                "end": 130,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 99,
                    "end": 129,
                    "id": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 112,
                      "name": "Origin",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 105,
                        "end": 112,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 107,
                          "end": 112,
                          "typeName": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 112,
                            "name": "Point",
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
                    "init": {
                      "type": "ObjectExpression",
                      "start": 115,
                      "end": 129,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 117,
                          "end": 121,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 117,
                            "end": 118,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 120,
                            "end": 121,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 123,
                          "end": 127,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 124,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 126,
                            "end": 127,
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
              "start": 136,
              "end": 266,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 143,
                "end": 266,
                "id": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 155,
                  "name": "Utils",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 156,
                  "end": 266,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 166,
                      "end": 260,
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 173,
                        "end": 260,
                        "id": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 184,
                          "name": "Plane",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 185,
                          "end": 260,
                          "body": [
                            {
                              "type": "MethodDefinition",
                              "start": 199,
                              "end": 250,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 199,
                                "end": 210,
                                "name": "constructor",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "constructor",
                              "value": {
                                "type": "FunctionExpression",
                                "start": 210,
                                "end": 250,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
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
                                      "name": "tl",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 220,
                                        "end": 227,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 222,
                                          "end": 227,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 222,
                                            "end": 227,
                                            "name": "Point",
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
                                      "name": "br",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 238,
                                        "end": 245,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 240,
                                          "end": 245,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 240,
                                            "end": 245,
                                            "name": "Point",
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
                                    "readonly": false,
                                    "static": false
                                  }
                                ],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 247,
                                  "end": 250,
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
