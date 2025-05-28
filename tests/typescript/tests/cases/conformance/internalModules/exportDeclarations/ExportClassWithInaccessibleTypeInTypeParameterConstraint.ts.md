__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 454,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 27,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 28,
              "end": 73,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 38,
                  "end": 48,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 57,
                  "end": 67,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 79,
            "end": 121,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 86,
              "end": 121,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 90,
                  "end": 120,
                  "id": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 103,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
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
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 109,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 111,
                          "end": 112,
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
                        "start": 114,
                        "end": 118,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 117,
                          "end": 118,
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
            "start": 127,
            "end": 188,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 134,
              "end": 188,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 140,
                "end": 147,
                "decorators": [],
                "name": "Point3d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 156,
                "end": 161,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 162,
                "end": 188,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 172,
                    "end": 182,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 194,
            "end": 246,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 201,
              "end": 246,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 205,
                  "end": 245,
                  "id": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 222,
                    "decorators": [],
                    "name": "Origin3d",
                    "optional": false,
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
                          "decorators": [],
                          "name": "Point3d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 227,
                          "end": 228,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 230,
                          "end": 231,
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
                        "start": 233,
                        "end": 237,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 233,
                          "end": 234,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 236,
                          "end": 237,
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
                        "start": 239,
                        "end": 243,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 242,
                          "end": 243,
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
            "start": 252,
            "end": 452,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 259,
              "end": 452,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 265,
                "end": 269,
                "decorators": [],
                "name": "Line",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "decorators": [],
                      "name": "TPoint",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 285,
                      "end": 290,
                      "typeName": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 290,
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
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 291,
                "end": 452,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 301,
                    "end": 358,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 312,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 312,
                      "end": 358,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                            "decorators": [],
                            "name": "start",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "TPoint",
                                  "optional": false,
                                  "typeAnnotation": null
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
                          "start": 335,
                          "end": 353,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 342,
                            "end": 353,
                            "decorators": [],
                            "name": "end",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "TPoint",
                                  "optional": false,
                                  "typeAnnotation": null
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
                        "start": 355,
                        "end": 358,
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 368,
                    "end": 446,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 387,
                      "decorators": [],
                      "name": "fromorigin2d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 387,
                      "end": 446,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 388,
                          "end": 396,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
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
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
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
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
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
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
