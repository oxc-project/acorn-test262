__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 590,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 126,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 32,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 32,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 31,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 31,
                    "value": 3,
                    "raw": "3"
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
            "type": "ClassDeclaration",
            "start": 37,
            "end": 124,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 45,
              "end": 124,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 55,
                  "end": 65,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
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
                  "typeAnnotation": null,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 74,
                  "end": 118,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "name": "Z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 79,
                    "end": 118,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "name": "M",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 83,
                      "end": 118,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 97,
                          "end": 108,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 97,
                            "end": 107,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 97,
                              "end": 103,
                              "object": {
                                "type": "ThisExpression",
                                "start": 97,
                                "end": 101
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 103,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 107,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "directive": null
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
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 128,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 137,
        "end": 256,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 143,
            "end": 254,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 151,
              "end": 254,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 161,
                  "end": 171,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
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
                  "typeAnnotation": null,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 180,
                  "end": 248,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 185,
                    "name": "Z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 185,
                    "end": 248,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 186,
                        "end": 187,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 189,
                      "end": 248,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 203,
                          "end": 214,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 207,
                              "end": 213,
                              "id": {
                                "type": "Identifier",
                                "start": 207,
                                "end": 208,
                                "name": "M",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 211,
                                "end": 213,
                                "value": 10,
                                "raw": "10"
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 227,
                          "end": 238,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 227,
                            "end": 237,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 227,
                              "end": 233,
                              "object": {
                                "type": "ThisExpression",
                                "start": 227,
                                "end": 231
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 232,
                                "end": 233,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 236,
                              "end": 237,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "directive": null
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
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 258,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 266,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 267,
        "end": 380,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 291,
            "end": 378,
            "id": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 299,
              "end": 378,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 309,
                  "end": 319,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 318,
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
                  "typeAnnotation": null,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 328,
                  "end": 372,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 333,
                    "end": 372,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 334,
                        "end": 335,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 337,
                      "end": 372,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 351,
                          "end": 362,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 351,
                            "end": 361,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 351,
                              "end": 357,
                              "object": {
                                "type": "ThisExpression",
                                "start": 351,
                                "end": 355
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 356,
                                "end": 357,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 360,
                              "end": 361,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "directive": null
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
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 382,
      "end": 488,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 390,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 391,
        "end": 488,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 397,
            "end": 486,
            "id": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 405,
              "end": 486,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 415,
                  "end": 480,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
                    "name": "Z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 420,
                    "end": 480,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 423,
                      "end": 480,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 437,
                          "end": 448,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 441,
                              "end": 447,
                              "id": {
                                "type": "Identifier",
                                "start": 441,
                                "end": 442,
                                "name": "M",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 445,
                                "end": 447,
                                "value": 10,
                                "raw": "10"
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 461,
                          "end": 470,
                          "argument": {
                            "type": "Identifier",
                            "start": 468,
                            "end": 469,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 490,
      "end": 590,
      "id": {
        "type": "Identifier",
        "start": 497,
        "end": 498,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 499,
        "end": 590,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 523,
            "end": 588,
            "id": {
              "type": "Identifier",
              "start": 529,
              "end": 530,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 531,
              "end": 588,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 541,
                  "end": 582,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 545,
                    "end": 546,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 546,
                    "end": 582,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 549,
                      "end": 582,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 563,
                          "end": 572,
                          "argument": {
                            "type": "Identifier",
                            "start": 570,
                            "end": 571,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
