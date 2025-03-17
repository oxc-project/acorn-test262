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
      "end": 190,
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
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 146,
                  "name": "Origin",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 149,
                  "end": 151,
                  "value": "",
                  "raw": "\"\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 193,
      "end": 437,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 202,
        "end": 437,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 208,
            "end": 342,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 215,
              "end": 342,
              "id": {
                "type": "Identifier",
                "start": 221,
                "end": 226,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 227,
                "end": 342,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 237,
                    "end": 288,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 248,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 248,
                      "end": 288,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 257,
                              "end": 265,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 259,
                                "end": 265
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
                          "start": 267,
                          "end": 283,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 274,
                            "end": 283,
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 275,
                              "end": 283,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 277,
                                "end": 283
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
                        "start": 285,
                        "end": 288,
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
                    "start": 298,
                    "end": 336,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 311,
                      "name": "Origin",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 323,
                            "end": 324,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 326,
                            "end": 327,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 329,
                          "end": 333,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 329,
                            "end": 330,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 332,
                            "end": 333,
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
                      "start": 311,
                      "end": 318,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 313,
                        "end": 318,
                        "typeName": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 318,
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
            "start": 348,
            "end": 435,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 355,
              "end": 435,
              "id": {
                "type": "Identifier",
                "start": 362,
                "end": 367,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "id": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 388,
                          "name": "Origin",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 391,
                          "end": 393,
                          "value": "",
                          "raw": "\"\""
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
