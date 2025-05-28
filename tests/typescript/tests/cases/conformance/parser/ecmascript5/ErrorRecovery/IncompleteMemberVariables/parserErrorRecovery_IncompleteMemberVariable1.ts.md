__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 517,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 13,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 29,
        "decorators": [],
        "name": "IPoint",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 56,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 36,
            "end": 54,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "decorators": [],
              "name": "getDist",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 81,
        "decorators": [],
        "name": "Shapes",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 82,
        "end": 433,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 102,
            "end": 430,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 109,
              "end": 430,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 115,
                "end": 120,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 139,
                "end": 430,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 150,
                    "end": 170,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 160,
                      "decorators": [],
                      "name": "con",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                          "value": "hello",
                          "raw": "\"hello\""
                        }
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
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 202,
                    "end": 254,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 213,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 214,
                      "end": 254,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 251,
                        "end": 254,
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
                    "start": 291,
                    "end": 357,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 298,
                      "decorators": [],
                      "name": "getDist",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 298,
                      "end": 357,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 310,
                                "end": 319,
                                "object": {
                                  "type": "Identifier",
                                  "start": 310,
                                  "end": 314,
                                  "decorators": [],
                                  "name": "Math",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 315,
                                  "end": 319,
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "start": 320,
                                  "end": 353,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 320,
                                    "end": 335,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 320,
                                      "end": 326,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 320,
                                        "end": 324
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 325,
                                        "end": 326,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 329,
                                      "end": 335,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 329,
                                        "end": 333
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 334,
                                        "end": 335,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "BinaryExpression",
                                    "start": 338,
                                    "end": 353,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 338,
                                      "end": 344,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 338,
                                        "end": 342
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 343,
                                        "end": 344,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "operator": "*",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 347,
                                      "end": 353,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 347,
                                        "end": 351
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 352,
                                        "end": 353,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    }
                                  }
                                }
                              ],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 392,
                    "end": 424,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 405,
                      "decorators": [],
                      "name": "origin",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "start": 408,
                      "end": 423,
                      "callee": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 417,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 418,
                          "end": 419,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Literal",
                          "start": 421,
                          "end": 422,
                          "value": 0,
                          "raw": "0"
                        }
                      ]
                    },
                    "computed": false,
                    "static": true,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 454,
      "end": 493,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 458,
          "end": 492,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 470,
            "end": 492,
            "callee": {
              "type": "MemberExpression",
              "start": 474,
              "end": 486,
              "object": {
                "type": "Identifier",
                "start": 474,
                "end": 480,
                "decorators": [],
                "name": "Shapes",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 481,
                "end": 486,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 487,
                "end": 488,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 490,
                "end": 491,
                "value": 4,
                "raw": "4"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 517,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 498,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 502,
            "decorators": [],
            "name": "dist",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 505,
            "end": 516,
            "callee": {
              "type": "MemberExpression",
              "start": 505,
              "end": 514,
              "object": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 507,
                "end": 514,
                "decorators": [],
                "name": "getDist",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
