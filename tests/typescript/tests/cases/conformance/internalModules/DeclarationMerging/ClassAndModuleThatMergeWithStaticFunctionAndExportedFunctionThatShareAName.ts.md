__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 583,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 162,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 162,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 69,
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
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 69,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 69,
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
            "start": 75,
            "end": 124,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 88,
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 124,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 110,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 112,
                            "end": 113,
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
                          "start": 115,
                          "end": 119,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 116,
                            "decorators": [],
                            "name": "y",
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
                        }
                      ]
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
    {
      "type": "TSModuleDeclaration",
      "start": 164,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 176,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 177,
        "end": 264,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 183,
            "end": 224,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 190,
              "end": 224,
              "id": {
                "type": "Identifier",
                "start": 199,
                "end": 205,
                "decorators": [],
                "name": "Origin",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 224,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 210,
                    "end": 222,
                    "argument": {
                      "type": "Literal",
                      "start": 217,
                      "end": 221,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 267,
      "end": 583,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 276,
        "end": 583,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 282,
            "end": 463,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 289,
              "end": 463,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 295,
                "end": 300,
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
                "start": 301,
                "end": 463,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 311,
                    "end": 362,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 322,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 322,
                      "end": 362,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 323,
                          "end": 339,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 330,
                            "end": 339,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 331,
                              "end": 339,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 333,
                                "end": 339
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 341,
                          "end": 357,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 348,
                            "end": 357,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 349,
                              "end": 357,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 351,
                                "end": 357
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
                        "start": 359,
                        "end": 362,
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
                    "start": 372,
                    "end": 421,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 385,
                      "decorators": [],
                      "name": "Origin",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 385,
                      "end": 421,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 387,
                        "end": 394,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 389,
                          "end": 394,
                          "typeName": {
                            "type": "Identifier",
                            "start": 389,
                            "end": 394,
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 395,
                        "end": 421,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 397,
                            "end": 419,
                            "argument": {
                              "type": "ObjectExpression",
                              "start": 404,
                              "end": 418,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 406,
                                  "end": 410,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 406,
                                    "end": 407,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 409,
                                    "end": 410,
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
                                  "start": 412,
                                  "end": 416,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 412,
                                    "end": 413,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 415,
                                    "end": 416,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 469,
            "end": 581,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 476,
              "end": 581,
              "id": {
                "type": "Identifier",
                "start": 483,
                "end": 488,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 489,
                "end": 581,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 499,
                    "end": 538,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 506,
                      "end": 538,
                      "id": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 521,
                        "decorators": [],
                        "name": "Origin",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 524,
                        "end": 538,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 526,
                            "end": 536,
                            "argument": {
                              "type": "Literal",
                              "start": 533,
                              "end": 535,
                              "value": "",
                              "raw": "\"\""
                            }
                          }
                        ]
                      },
                      "expression": false
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
