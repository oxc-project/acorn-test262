__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 374,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 373,
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
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 34,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 35,
                "end": 80,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 45,
                    "end": 55,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
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
                      "start": 46,
                      "end": 54,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 48,
                        "end": 54
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 64,
                    "end": 74,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
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
                      "start": 65,
                      "end": 73,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 67,
                        "end": 73
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
            "start": 86,
            "end": 128,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 93,
              "end": 128,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 97,
                  "end": 127,
                  "id": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 110,
                    "name": "Origin",
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
                    "start": 113,
                    "end": 127,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 115,
                        "end": 119,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 118,
                          "end": 119,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 121,
                        "end": 125,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 122,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 124,
                          "end": 125,
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
            "start": 134,
            "end": 195,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 141,
              "end": 195,
              "id": {
                "type": "Identifier",
                "start": 147,
                "end": 154,
                "name": "Point3d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 163,
                "end": 168,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 169,
                "end": 195,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 179,
                    "end": 189,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
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
                      "start": 180,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 182,
                        "end": 188
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
            "start": 201,
            "end": 253,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 208,
              "end": 253,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 212,
                  "end": 252,
                  "id": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 229,
                    "name": "Origin3d",
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
                    "start": 232,
                    "end": 252,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 234,
                        "end": 238,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 235,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 237,
                          "end": 238,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 240,
                        "end": 244,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 241,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 243,
                          "end": 244,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 246,
                        "end": 250,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 249,
                          "end": 250,
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
            "start": 259,
            "end": 371,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 266,
              "end": 371,
              "id": {
                "type": "Identifier",
                "start": 272,
                "end": 276,
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 298,
                "end": 371,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 308,
                    "end": 365,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 319,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 319,
                      "end": 365,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "start",
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
                          "start": 342,
                          "end": 360,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 349,
                            "end": 360,
                            "name": "end",
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
                        "start": 362,
                        "end": 365,
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
                      "name": "TPoint",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 292,
                      "end": 297,
                      "typeName": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 297,
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
