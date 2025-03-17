__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 437,
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
      "end": 190,
      "body": {
        "type": "TSModuleBlock",
        "start": 130,
        "end": 190,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 136,
            "end": 152,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 140,
                "end": 151,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 146,
                  "decorators": [],
                  "name": "Origin",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 149,
                  "end": 151,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
      "start": 193,
      "end": 437,
      "body": {
        "type": "TSModuleBlock",
        "start": 202,
        "end": 437,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 208,
            "end": 342,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 215,
              "end": 342,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 227,
                "end": 342,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 237,
                    "end": 288,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 248,
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
                      "start": 248,
                      "end": 288,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 285,
                        "end": 288,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 249,
                          "end": 265,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 256,
                            "end": 265,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 257,
                              "end": 265,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 259,
                                "end": 265
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 267,
                          "end": 283,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 274,
                            "end": 283,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 275,
                              "end": 283,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 277,
                                "end": 283
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
                    "start": 298,
                    "end": 336,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 311,
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
                      "start": 311,
                      "end": 318,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 313,
                        "end": 318,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 318,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 321,
                      "end": 335,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 323,
                          "end": 327,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 323,
                            "end": 324,
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
                            "start": 326,
                            "end": 327,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 329,
                          "end": 333,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 329,
                            "end": 330,
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
                            "start": 332,
                            "end": 333,
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
                "start": 221,
                "end": 226,
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
            "start": 348,
            "end": 435,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 355,
              "end": 435,
              "body": {
                "type": "TSModuleBlock",
                "start": 368,
                "end": 435,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 378,
                    "end": 394,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 382,
                        "end": 393,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 388,
                          "decorators": [],
                          "name": "Origin",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 391,
                          "end": 393,
                          "raw": "\"\"",
                          "value": ""
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 362,
                "end": 367,
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
        "start": 200,
        "end": 201,
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
