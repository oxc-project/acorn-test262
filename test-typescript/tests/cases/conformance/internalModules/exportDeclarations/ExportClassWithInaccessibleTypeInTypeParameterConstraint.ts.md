__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 455,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 454,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 16,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 27,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 28,
              "end": 73,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 38,
                  "end": 48,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 41,
                      "end": 47
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 57,
                  "end": 67,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    }
                  },
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
          {
            "type": "ExportNamedDeclaration",
            "start": 79,
            "end": 121,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 86,
              "end": 121,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 90,
                  "end": 120,
                  "id": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 103,
                    "name": "Origin",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 103,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 103,
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 103,
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
                    "start": 106,
                    "end": 120,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 108,
                        "end": 112,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 109,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 111,
                          "end": 112,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 114,
                        "end": 118,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 117,
                          "end": 118,
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
            "start": 127,
            "end": 188,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 134,
              "end": 188,
              "id": {
                "type": "Identifier",
                "start": 140,
                "end": 147,
                "name": "Point3d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 156,
                "end": 161,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 162,
                "end": 188,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 172,
                    "end": 182,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 173,
                      "end": 181,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 175,
                        "end": 181
                      }
                    },
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 194,
            "end": 246,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 201,
              "end": 246,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 205,
                  "end": 245,
                  "id": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 222,
                    "name": "Origin3d",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 213,
                      "end": 222,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 215,
                        "end": 222,
                        "typeName": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 222,
                          "name": "Point3d",
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
                    "start": 225,
                    "end": 245,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 227,
                        "end": 231,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 227,
                          "end": 228,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 230,
                          "end": 231,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 233,
                        "end": 237,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 233,
                          "end": 234,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 236,
                          "end": 237,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 239,
                        "end": 243,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 242,
                          "end": 243,
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
            "start": 252,
            "end": 452,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 259,
              "end": 452,
              "id": {
                "type": "Identifier",
                "start": 265,
                "end": 269,
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 291,
                "end": 452,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 301,
                    "end": 358,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 312,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 312,
                      "end": 358,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 313,
                          "end": 333,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 320,
                            "end": 333,
                            "name": "start",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 325,
                              "end": 333,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 327,
                                "end": 333,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 327,
                                  "end": 333,
                                  "name": "TPoint",
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
                          "start": 335,
                          "end": 353,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 342,
                            "end": 353,
                            "name": "end",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 345,
                              "end": 353,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 347,
                                "end": 353,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 347,
                                  "end": 353,
                                  "name": "TPoint",
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
                        "start": 355,
                        "end": 358,
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 368,
                    "end": 446,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 387,
                      "name": "fromorigin2d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 387,
                      "end": 446,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 388,
                          "end": 396,
                          "name": "p",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 389,
                            "end": 396,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 391,
                              "end": 396,
                              "typeName": {
                                "type": "Identifier",
                                "start": 391,
                                "end": 396,
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
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 410,
                        "end": 446,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 424,
                            "end": 436,
                            "argument": {
                              "type": "Literal",
                              "start": 431,
                              "end": 435,
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 397,
                        "end": 410,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 399,
                          "end": 410,
                          "typeName": {
                            "type": "Identifier",
                            "start": 399,
                            "end": 403,
                            "name": "Line",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 403,
                            "end": 410,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 404,
                                "end": 409,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 404,
                                  "end": 409,
                                  "name": "Point",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 269,
                "end": 291,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 270,
                    "end": 290,
                    "name": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 276,
                      "name": "TPoint",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 285,
                      "end": 290,
                      "typeName": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 290,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
