__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 518,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 13,
      "end": 56,
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 56,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 36,
            "end": 54,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "decorators": [],
              "name": "getDist",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 29,
        "decorators": [],
        "name": "IPoint",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 433,
      "body": {
        "type": "TSModuleBlock",
        "start": 82,
        "end": 433,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 102,
            "end": 430,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 109,
              "end": 430,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 139,
                "end": 430,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 150,
                    "end": 170,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 160,
                      "decorators": [],
                      "name": "con",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 160,
                      "end": 169,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 162,
                        "end": 169,
                        "literal": {
                          "type": "Literal",
                          "start": 162,
                          "end": 169,
                          "raw": "\"hello\"",
                          "value": "hello"
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 202,
                    "end": 254,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 213,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 214,
                      "end": 254,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 251,
                        "end": 254,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 215,
                          "end": 231,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 231,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 223,
                              "end": 231,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 225,
                                "end": 231
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 233,
                          "end": 249,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 249,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 241,
                              "end": 249,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 243,
                                "end": 249
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 291,
                    "end": 357,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 298,
                      "decorators": [],
                      "name": "getDist",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 298,
                      "end": 357,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 301,
                        "end": 357,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 303,
                            "end": 355,
                            "argument": {
                              "type": "CallExpression",
                              "start": 310,
                              "end": 354,
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "start": 320,
                                  "end": 353,
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 320,
                                    "end": 335,
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 320,
                                      "end": 326,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 320,
                                        "end": 324
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 325,
                                        "end": 326,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 329,
                                      "end": 335,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 329,
                                        "end": 333
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 334,
                                        "end": 335,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "start": 338,
                                    "end": 353,
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 338,
                                      "end": 344,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 338,
                                        "end": 342
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 343,
                                        "end": 344,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 347,
                                      "end": 353,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 347,
                                        "end": 351
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 352,
                                        "end": 353,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 310,
                                "end": 319,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 310,
                                  "end": 314,
                                  "decorators": [],
                                  "name": "Math",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 315,
                                  "end": 319,
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 392,
                    "end": 424,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 405,
                      "decorators": [],
                      "name": "origin",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "NewExpression",
                      "start": 408,
                      "end": 423,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 418,
                          "end": 419,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "Literal",
                          "start": 421,
                          "end": 422,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 417,
                        "decorators": [],
                        "name": "Point",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 115,
                "end": 120,
                "decorators": [],
                "name": "Point",
                "optional": false
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 132,
                  "end": 138,
                  "expression": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 138,
                    "decorators": [],
                    "name": "IPoint",
                    "optional": false
                  }
                }
              ],
              "superClass": null
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
        "start": 75,
        "end": 81,
        "decorators": [],
        "name": "Shapes",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 454,
      "end": 493,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 458,
          "end": 492,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 458,
            "end": 467,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 459,
              "end": 467,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 461,
                "end": 467,
                "typeName": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 467,
                  "decorators": [],
                  "name": "IPoint",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 470,
            "end": 492,
            "arguments": [
              {
                "type": "Literal",
                "start": 487,
                "end": 488,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 490,
                "end": 491,
                "raw": "4",
                "value": 4
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 474,
              "end": 486,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 474,
                "end": 480,
                "decorators": [],
                "name": "Shapes",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 481,
                "end": 486,
                "decorators": [],
                "name": "Point",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 516,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 502,
            "decorators": [],
            "name": "dist",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 505,
            "end": 516,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 505,
              "end": 514,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "decorators": [],
                "name": "p",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 507,
                "end": 514,
                "decorators": [],
                "name": "getDist",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
