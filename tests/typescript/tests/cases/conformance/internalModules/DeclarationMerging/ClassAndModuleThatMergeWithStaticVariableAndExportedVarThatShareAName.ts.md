__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 456,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 115,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 115,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 69,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
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
              "start": 29,
              "end": 69,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 69,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 30,
                  "end": 46,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 46,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 48,
                  "end": 64,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 64,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
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
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 113,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 88,
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 95,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 95,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": {
              "type": "ObjectExpression",
              "start": 98,
              "end": 112,
              "properties": [
                {
                  "type": "Property",
                  "start": 100,
                  "end": 104,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
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
                    "start": 103,
                    "end": 104,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "Property",
                  "start": 106,
                  "end": 110,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
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
                    "start": 109,
                    "end": 110,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 117,
      "end": 199,
      "body": {
        "type": "TSModuleBlock",
        "start": 130,
        "end": 199,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 159,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 143,
              "end": 159,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 147,
                  "end": 158,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 153,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 156,
                    "end": 158,
                    "raw": "\"\"",
                    "value": ""
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
        "start": 124,
        "end": 129,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 202,
      "end": 456,
      "body": {
        "type": "TSModuleBlock",
        "start": 211,
        "end": 456,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 217,
            "end": 351,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 224,
              "end": 351,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 236,
                "end": 351,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 246,
                    "end": 297,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 257,
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
                      "start": 257,
                      "end": 297,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 294,
                        "end": 297,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 258,
                          "end": 274,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 265,
                            "end": 274,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 266,
                              "end": 274,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 268,
                                "end": 274
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 276,
                          "end": 292,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 283,
                            "end": 292,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 284,
                              "end": 292,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 286,
                                "end": 292
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
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 307,
                    "end": 345,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 320,
                      "decorators": [],
                      "name": "Origin",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 320,
                      "end": 327,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 322,
                        "end": 327,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 327,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 330,
                      "end": 344,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 332,
                          "end": 336,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 333,
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
                            "start": 335,
                            "end": 336,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 338,
                          "end": 342,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 338,
                            "end": 339,
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
                            "start": 341,
                            "end": 342,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 230,
                "end": 235,
                "decorators": [],
                "name": "Point",
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 357,
            "end": 454,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 364,
              "end": 454,
              "body": {
                "type": "TSModuleBlock",
                "start": 377,
                "end": 454,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 387,
                    "end": 410,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 394,
                      "end": 410,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 398,
                          "end": 409,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 398,
                            "end": 404,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 407,
                            "end": 409,
                            "raw": "\"\"",
                            "value": ""
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
                "start": 371,
                "end": 376,
                "decorators": [],
                "name": "Point",
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
        "start": 209,
        "end": 210,
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
