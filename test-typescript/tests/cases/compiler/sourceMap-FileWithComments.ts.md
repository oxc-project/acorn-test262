sourceMap-FileWithComments.ts
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
      "end": 576,
      "body": {
        "type": "TSModuleBlock",
        "start": 82,
        "end": 576,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 102,
            "end": 399,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 109,
              "end": 399,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 139,
                "end": 399,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 172,
                    "end": 223,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 183,
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
                      "start": 183,
                      "end": 223,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 220,
                        "end": 223,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
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
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 260,
                    "end": 326,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 267,
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
                      "start": 267,
                      "end": 326,
                      "async": false,
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
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "start": 289,
                                  "end": 322,
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 289,
                                    "end": 304,
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 289,
                                      "end": 295,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 289,
                                        "end": 293
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 294,
                                        "end": 295,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 298,
                                      "end": 304,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 298,
                                        "end": 302
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 303,
                                        "end": 304,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "start": 307,
                                    "end": 322,
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 307,
                                      "end": 313,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 307,
                                        "end": 311
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 312,
                                        "end": 313,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 316,
                                      "end": 322,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 316,
                                        "end": 320
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 321,
                                        "end": 322,
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
                                "start": 279,
                                "end": 288,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 279,
                                  "end": 283,
                                  "decorators": [],
                                  "name": "Math",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 284,
                                  "end": 288,
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
                    "start": 361,
                    "end": 393,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 374,
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
                      "start": 377,
                      "end": 392,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 387,
                          "end": 388,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "Literal",
                          "start": 390,
                          "end": 391,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 386,
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
          },
          {
            "type": "VariableDeclaration",
            "start": 441,
            "end": 452,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 445,
                "end": 451,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 446,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 449,
                  "end": 451,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 458,
            "end": 487,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 465,
              "end": 487,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 480,
                "end": 487,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 563,
            "end": 574,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 567,
                "end": 573,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 571,
                  "end": 573,
                  "raw": "10",
                  "value": 10
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
      "start": 600,
      "end": 639,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 604,
          "end": 638,
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 616,
            "end": 638,
            "arguments": [
              {
                "type": "Literal",
                "start": 633,
                "end": 634,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 636,
                "end": 637,
                "raw": "4",
                "value": 4
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 620,
              "end": 632,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 620,
                "end": 626,
                "decorators": [],
                "name": "Shapes",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 627,
                "end": 632,
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
      "start": 640,
      "end": 663,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 662,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 648,
            "decorators": [],
            "name": "dist",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 651,
            "end": 662,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 651,
              "end": 660,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 651,
                "end": 652,
                "decorators": [],
                "name": "p",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 653,
                "end": 660,
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
  "sourceType": "script"
}
```
