__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 617,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 145,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 145,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 101,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 101,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 101,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 44,
                    "end": 95,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 55,
                      "end": 95,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 92,
                        "end": 95,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 56,
                          "end": 72,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 72,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 64,
                              "end": 72,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 66,
                                "end": 72
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 74,
                          "end": 90,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 90,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 82,
                              "end": 90,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 84,
                                "end": 90
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 33,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 107,
            "end": 143,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 114,
              "end": 143,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 118,
                  "end": 142,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 124,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 127,
                    "end": 142,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 137,
                        "end": 138,
                        "raw": "0",
                        "value": 0
                      },
                      {
                        "type": "Literal",
                        "start": 140,
                        "end": 141,
                        "raw": "0",
                        "value": 0
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 136,
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 171,
      "end": 249,
      "body": {
        "type": "TSModuleBlock",
        "start": 180,
        "end": 249,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 186,
            "end": 199,
            "id": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 275,
      "end": 419,
      "body": {
        "type": "TSModuleBlock",
        "start": 284,
        "end": 419,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 290,
            "end": 303,
            "id": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 356,
            "end": 372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 360,
                "end": 371,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 371,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 361,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 363,
                      "end": 371,
                      "exprName": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 371,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 377,
            "end": 392,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 381,
                "end": 391,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 391,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 382,
                    "end": 391,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 384,
                      "end": 391,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 384,
                        "end": 391,
                        "left": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 386,
                          "end": 391,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 397,
            "end": 417,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 401,
                "end": 416,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 405,
                  "end": 416,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 406,
                      "end": 409,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 407,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 408,
                        "end": 409,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 411,
                      "end": 414,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 412,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 413,
                        "end": 414,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
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
        "start": 282,
        "end": 283,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 442,
      "end": 504,
      "body": {
        "type": "TSModuleBlock",
        "start": 451,
        "end": 504,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 457,
            "end": 470,
            "id": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 468,
              "end": 469,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 476,
            "end": 502,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 480,
                "end": 501,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 481,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 484,
                  "end": 501,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 496,
                      "end": 497,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 499,
                      "end": 500,
                      "raw": "1",
                      "value": 1
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 488,
                    "end": 495,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 488,
                      "end": 489,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 490,
                      "end": 495,
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
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
        "start": 449,
        "end": 450,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 506,
      "end": 617,
      "body": {
        "type": "TSModuleBlock",
        "start": 515,
        "end": 617,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 521,
            "end": 534,
            "id": {
              "type": "Identifier",
              "start": 528,
              "end": 529,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 532,
              "end": 533,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 539,
            "end": 615,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 546,
              "end": 615,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 573,
                "end": 615,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 583,
                    "end": 609,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 591,
                      "end": 607,
                      "operator": "-",
                      "left": {
                        "type": "MemberExpression",
                        "start": 591,
                        "end": 601,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 591,
                          "end": 599,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 591,
                            "end": 592,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 593,
                            "end": 599,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 600,
                          "end": 601,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 604,
                        "end": 607,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 605,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 606,
                          "end": 607,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 555,
                "end": 560,
                "decorators": [],
                "name": "xDist",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 561,
                  "end": 571,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 562,
                    "end": 571,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 564,
                      "end": 571,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 564,
                        "end": 571,
                        "left": {
                          "type": "Identifier",
                          "start": 564,
                          "end": 565,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 566,
                          "end": 571,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
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
        "start": 513,
        "end": 514,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
