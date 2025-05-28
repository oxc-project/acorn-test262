__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 663,
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
      "end": 576,
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
        "end": 576,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 102,
            "end": 399,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 109,
              "end": 399,
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
                "end": 399,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 172,
                    "end": 223,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 183,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 183,
                      "end": 223,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 184,
                          "end": 200,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 191,
                            "end": 200,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 192,
                              "end": 200,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 194,
                                "end": 200
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 202,
                          "end": 218,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 218,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 210,
                              "end": 218,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 212,
                                "end": 218
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
                        "start": 220,
                        "end": 223,
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
                    "start": 260,
                    "end": 326,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 267,
                      "decorators": [],
                      "name": "getDist",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 267,
                      "end": 326,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 270,
                        "end": 326,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 272,
                            "end": 324,
                            "argument": {
                              "type": "CallExpression",
                              "start": 279,
                              "end": 323,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 279,
                                "end": 288,
                                "object": {
                                  "type": "Identifier",
                                  "start": 279,
                                  "end": 283,
                                  "decorators": [],
                                  "name": "Math",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 284,
                                  "end": 288,
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
                                  "start": 289,
                                  "end": 322,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 289,
                                    "end": 304,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 289,
                                      "end": 295,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 289,
                                        "end": 293
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 294,
                                        "end": 295,
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
                                      "start": 298,
                                      "end": 304,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 298,
                                        "end": 302
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 303,
                                        "end": 304,
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
                                    "start": 307,
                                    "end": 322,
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 307,
                                      "end": 313,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 307,
                                        "end": 311
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 312,
                                        "end": 313,
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
                                      "start": 316,
                                      "end": 322,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 316,
                                        "end": 320
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 321,
                                        "end": 322,
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
                    "start": 361,
                    "end": 393,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 374,
                      "decorators": [],
                      "name": "origin",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "start": 377,
                      "end": 392,
                      "callee": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 386,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 387,
                          "end": 388,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Literal",
                          "start": 390,
                          "end": 391,
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
          },
          {
            "type": "VariableDeclaration",
            "start": 441,
            "end": 452,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 445,
                "end": 451,
                "id": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 446,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 449,
                  "end": 451,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 458,
            "end": 487,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 465,
              "end": 487,
              "id": {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "decorators": [],
                "name": "foo",
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
                "start": 480,
                "end": 487,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 563,
            "end": 574,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 567,
                "end": 573,
                "id": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 571,
                  "end": 573,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 600,
      "end": 639,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 604,
          "end": 638,
          "id": {
            "type": "Identifier",
            "start": 604,
            "end": 613,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 605,
              "end": 613,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 607,
                "end": 613,
                "typeName": {
                  "type": "Identifier",
                  "start": 607,
                  "end": 613,
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
            "start": 616,
            "end": 638,
            "callee": {
              "type": "MemberExpression",
              "start": 620,
              "end": 632,
              "object": {
                "type": "Identifier",
                "start": 620,
                "end": 626,
                "decorators": [],
                "name": "Shapes",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 627,
                "end": 632,
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
                "start": 633,
                "end": 634,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 636,
                "end": 637,
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
      "start": 640,
      "end": 663,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 662,
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 648,
            "decorators": [],
            "name": "dist",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 651,
            "end": 662,
            "callee": {
              "type": "MemberExpression",
              "start": 651,
              "end": 660,
              "object": {
                "type": "Identifier",
                "start": 651,
                "end": 652,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 653,
                "end": 660,
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
