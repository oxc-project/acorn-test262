__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 489,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 126,
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
        "end": 126,
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
            "type": "MethodDefinition",
            "start": 75,
            "end": 124,
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
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 124,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 124,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 100,
                    "end": 122,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 107,
                      "end": 121,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 109,
                          "end": 113,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 110,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 112,
                            "end": 113,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
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
                            "name": "y",
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
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 90,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 92,
                  "end": 97,
                  "typeName": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 97,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 128,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 140,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 141,
        "end": 216,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 147,
            "end": 179,
            "id": {
              "type": "Identifier",
              "start": 156,
              "end": 162,
              "name": "Origin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 165,
              "end": 179,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 167,
                  "end": 177,
                  "argument": {
                    "type": "Literal",
                    "start": 174,
                    "end": 176,
                    "value": "",
                    "raw": "\"\""
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 219,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 227,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 228,
        "end": 489,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 234,
            "end": 379,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 241,
              "end": 379,
              "id": {
                "type": "Identifier",
                "start": 247,
                "end": 252,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 253,
                "end": 379,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 263,
                    "end": 314,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 274,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 274,
                      "end": 314,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 275,
                          "end": 291,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 282,
                            "end": 291,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 283,
                              "end": 291,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 285,
                                "end": 291
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
                          "start": 293,
                          "end": 309,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 300,
                            "end": 309,
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 301,
                              "end": 309,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 303,
                                "end": 309
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
                        "start": 311,
                        "end": 314,
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
                    "start": 324,
                    "end": 373,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 337,
                      "name": "Origin",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 337,
                      "end": 373,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 347,
                        "end": 373,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 349,
                            "end": 371,
                            "argument": {
                              "type": "ObjectExpression",
                              "start": 356,
                              "end": 370,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 358,
                                  "end": 362,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 358,
                                    "end": 359,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 361,
                                    "end": 362,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 364,
                                  "end": 368,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 364,
                                    "end": 365,
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 367,
                                    "end": 368,
                                    "value": 0,
                                    "raw": "0"
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
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 339,
                        "end": 346,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 341,
                          "end": 346,
                          "typeName": {
                            "type": "Identifier",
                            "start": 341,
                            "end": 346,
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
            "start": 385,
            "end": 487,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 392,
              "end": 487,
              "id": {
                "type": "Identifier",
                "start": 399,
                "end": 404,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 405,
                "end": 487,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 415,
                    "end": 447,
                    "id": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 430,
                      "name": "Origin",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 433,
                      "end": 447,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 435,
                          "end": 445,
                          "argument": {
                            "type": "Literal",
                            "start": 442,
                            "end": 444,
                            "value": "",
                            "raw": "\"\""
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
