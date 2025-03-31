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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 115,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 69,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 69,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
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
                  "start": 48,
                  "end": 64,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 64,
                    "name": "y",
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
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 69,
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
            "type": "PropertyDefinition",
            "start": 75,
            "end": 113,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 88,
              "name": "Origin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 103,
                    "end": 104,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 106,
                  "end": 110,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 109,
                    "end": 110,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 95,
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSModuleDeclaration",
      "start": 117,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 129,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 130,
        "end": 199,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 159,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 143,
              "end": 159,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 147,
                  "end": 158,
                  "id": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 153,
                    "name": "Origin",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 156,
                    "end": 158,
                    "value": "",
                    "raw": "\"\""
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
    {
      "type": "TSModuleDeclaration",
      "start": 202,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 211,
        "end": 456,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 217,
            "end": 351,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 224,
              "end": 351,
              "id": {
                "type": "Identifier",
                "start": 230,
                "end": 235,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 236,
                "end": 351,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 246,
                    "end": 297,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 257,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 257,
                      "end": 297,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 266,
                              "end": 274,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 268,
                                "end": 274
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
                          "start": 276,
                          "end": 292,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 283,
                            "end": 292,
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 284,
                              "end": 292,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 286,
                                "end": 292
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
                        "start": 294,
                        "end": 297,
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
                    "type": "PropertyDefinition",
                    "start": 307,
                    "end": 345,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 320,
                      "name": "Origin",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 333,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 335,
                            "end": 336,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 338,
                          "end": 342,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 338,
                            "end": 339,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 341,
                            "end": 342,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 320,
                      "end": 327,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 322,
                        "end": 327,
                        "typeName": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 327,
                          "name": "Point",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
            "start": 357,
            "end": 454,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 364,
              "end": 454,
              "id": {
                "type": "Identifier",
                "start": 371,
                "end": 376,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 377,
                "end": 454,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 387,
                    "end": 410,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 394,
                      "end": 410,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 398,
                          "end": 409,
                          "id": {
                            "type": "Identifier",
                            "start": 398,
                            "end": 404,
                            "name": "Origin",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 407,
                            "end": 409,
                            "value": "",
                            "raw": "\"\""
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
