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
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 29,
        "name": "IPoint",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "getDist",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Shapes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 115,
                "end": 120,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 139,
                "end": 430,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 150,
                    "end": 170,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 160,
                      "name": "con",
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
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 202,
                    "end": 254,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 213,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 214,
                      "end": 254,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 223,
                              "end": 231,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 225,
                                "end": 231
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
                          "start": 233,
                          "end": 249,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 249,
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 241,
                              "end": 249,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 243,
                                "end": 249
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
                        "start": 251,
                        "end": 254,
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
                    "start": 291,
                    "end": 357,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 298,
                      "name": "getDist",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 298,
                      "end": 357,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                  "name": "Math",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 315,
                                  "end": 319,
                                  "name": "sqrt",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
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
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
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
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
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
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
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
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
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
                    "start": 392,
                    "end": 424,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 405,
                      "name": "origin",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 408,
                      "end": 423,
                      "callee": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 417,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      ],
                      "typeArguments": null
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 132,
                  "end": 138,
                  "expression": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 138,
                    "name": "IPoint",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
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
          "id": {
            "type": "Identifier",
            "start": 458,
            "end": 467,
            "name": "p",
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
                  "name": "IPoint",
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
                "name": "Shapes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 481,
                "end": 486,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 498,
            "end": 502,
            "name": "dist",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 507,
                "end": 514,
                "name": "getDist",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
