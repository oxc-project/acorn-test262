__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 373,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 373,
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
        "end": 373,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 80,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 80,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 34,
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
                "start": 35,
                "end": 80,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 45,
                    "end": 55,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 46,
                      "end": 54,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 48,
                        "end": 54
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
                    "start": 64,
                    "end": 74,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 65,
                      "end": 73,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 67,
                        "end": 73
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
            "start": 86,
            "end": 128,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 93,
              "end": 128,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 97,
                  "end": 127,
                  "id": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 110,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 105,
                        "end": 110,
                        "typeName": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 110,
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
                    "start": 113,
                    "end": 127,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 115,
                        "end": 119,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 118,
                          "end": 119,
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
                        "start": 121,
                        "end": 125,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 122,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 124,
                          "end": 125,
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
            "start": 134,
            "end": 195,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 141,
              "end": 195,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 147,
                "end": 154,
                "decorators": [],
                "name": "Point3d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 163,
                "end": 168,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 169,
                "end": 195,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 179,
                    "end": 189,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 180,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 182,
                        "end": 188
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
            "start": 201,
            "end": 253,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 208,
              "end": 253,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 212,
                  "end": 252,
                  "id": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 229,
                    "decorators": [],
                    "name": "Origin3d",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 220,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 222,
                        "end": 229,
                        "typeName": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 229,
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
                    "start": 232,
                    "end": 252,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 234,
                        "end": 238,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 235,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 237,
                          "end": 238,
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
                        "start": 240,
                        "end": 244,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 241,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 243,
                          "end": 244,
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
                        "start": 246,
                        "end": 250,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 249,
                          "end": 250,
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
            "start": 259,
            "end": 371,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 266,
              "end": 371,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 272,
                "end": 276,
                "decorators": [],
                "name": "Line",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 276,
                "end": 298,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 277,
                    "end": 297,
                    "name": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 283,
                      "decorators": [],
                      "name": "TPoint",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 292,
                      "end": 297,
                      "typeName": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 297,
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
                "start": 298,
                "end": 371,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 308,
                    "end": 365,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 319,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 319,
                      "end": 365,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 320,
                          "end": 340,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 327,
                            "end": 340,
                            "decorators": [],
                            "name": "start",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 332,
                              "end": 340,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 334,
                                "end": 340,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 334,
                                  "end": 340,
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
                          "start": 342,
                          "end": 360,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 349,
                            "end": 360,
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 352,
                              "end": 360,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 354,
                                "end": 360,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 354,
                                  "end": 360,
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
                        "start": 362,
                        "end": 365,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
