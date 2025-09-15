__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 36
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 58
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 69,
                                "end": 75
                              },
                              "start": 67,
                              "end": 75
                            },
                            "start": 66,
                            "end": 75
                          },
                          "readonly": false,
                          "static": false,
                          "start": 59,
                          "end": 75
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 87,
                                "end": 93
                              },
                              "start": 85,
                              "end": 93
                            },
                            "start": 84,
                            "end": 93
                          },
                          "readonly": false,
                          "static": false,
                          "start": 77,
                          "end": 93
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 95,
                        "end": 98
                      },
                      "expression": false,
                      "start": 58,
                      "end": 98
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 47,
                    "end": 98
                  }
                ],
                "start": 37,
                "end": 104
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 104
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 104
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 127
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 139
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 140,
                        "end": 141
                      },
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 143,
                        "end": 144
                      }
                    ],
                    "start": 130,
                    "end": 145
                  },
                  "definite": false,
                  "start": 121,
                  "end": 145
                }
              ],
              "declare": false,
              "start": 117,
              "end": 146
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 110,
            "end": 146
          }
        ],
        "start": 12,
        "end": 148
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 148
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 185
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 204
            },
            "importKind": "value",
            "start": 192,
            "end": 205
          }
        ],
        "start": 186,
        "end": 255
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 174,
      "end": 255
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 292
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "importKind": "value",
            "start": 299,
            "end": 312
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 380
                      },
                      "typeArguments": null,
                      "start": 372,
                      "end": 380
                    },
                    "start": 370,
                    "end": 380
                  },
                  "start": 369,
                  "end": 380
                },
                "init": null,
                "definite": false,
                "start": 369,
                "end": 380
              }
            ],
            "declare": false,
            "start": 365,
            "end": 381
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 394
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 400
                        },
                        "start": 393,
                        "end": 400
                      },
                      "typeArguments": null,
                      "start": 393,
                      "end": 400
                    },
                    "start": 391,
                    "end": 400
                  },
                  "start": 390,
                  "end": 400
                },
                "init": null,
                "definite": false,
                "start": 390,
                "end": 400
              }
            ],
            "declare": false,
            "start": 386,
            "end": 401
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 411
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 416
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 417,
                        "end": 418
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 415,
                      "end": 418
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 421
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 422,
                        "end": 423
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 420,
                      "end": 423
                    }
                  ],
                  "start": 414,
                  "end": 425
                },
                "definite": false,
                "start": 410,
                "end": 425
              }
            ],
            "declare": false,
            "start": 406,
            "end": 426
          }
        ],
        "start": 293,
        "end": 428
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 281,
      "end": 428
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 462
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 477
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
            },
            "importKind": "value",
            "start": 469,
            "end": 482
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 493
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 501
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 507
                    },
                    "optional": false,
                    "computed": false,
                    "start": 500,
                    "end": 507
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 508,
                      "end": 509
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 511,
                      "end": 512
                    }
                  ],
                  "start": 496,
                  "end": 513
                },
                "definite": false,
                "start": 492,
                "end": 513
              }
            ],
            "declare": false,
            "start": 488,
            "end": 514
          }
        ],
        "start": 463,
        "end": 516
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 451,
      "end": 516
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 529
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 544
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 548
            },
            "importKind": "value",
            "start": 536,
            "end": 549
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "xDist",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 575
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 579,
                          "end": 580
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 581,
                          "end": 586
                        },
                        "start": 579,
                        "end": 586
                      },
                      "typeArguments": null,
                      "start": 579,
                      "end": 586
                    },
                    "start": 577,
                    "end": 586
                  },
                  "start": 576,
                  "end": 586
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 606,
                            "end": 607
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 608,
                            "end": 614
                          },
                          "optional": false,
                          "computed": false,
                          "start": 606,
                          "end": 614
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 615,
                          "end": 616
                        },
                        "optional": false,
                        "computed": false,
                        "start": 606,
                        "end": 616
                      },
                      "operator": "-",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 619,
                          "end": 620
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 621,
                          "end": 622
                        },
                        "optional": false,
                        "computed": false,
                        "start": 619,
                        "end": 622
                      },
                      "start": 606,
                      "end": 622
                    },
                    "start": 598,
                    "end": 624
                  }
                ],
                "start": 588,
                "end": 630
              },
              "expression": false,
              "start": 561,
              "end": 630
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 554,
            "end": 630
          }
        ],
        "start": 530,
        "end": 632
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 518,
      "end": 632
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 632
}
```
