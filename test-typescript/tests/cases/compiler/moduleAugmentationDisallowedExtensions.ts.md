__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 561,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 38,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 36,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 36,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 35,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 34,
                    "end": 35,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "let"
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 504,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 70,
        "end": 504,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 76,
            "end": 90,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 80,
                "end": 89,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 89,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 83,
                      "end": 89
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
            "start": 95,
            "end": 109,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 99,
                "end": 108,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 108,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 108,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 102,
                      "end": 108
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 114,
            "end": 130,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 120,
                "end": 129,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 129,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 121,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 123,
                      "end": 129
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 135,
            "end": 249,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 249,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 139,
                  "end": 249,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 140,
                      "end": 142,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 142,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 142,
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 144,
                      "end": 146,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 146,
                        "decorators": [],
                        "name": "y1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 146,
                        "decorators": [],
                        "name": "y1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 148,
                      "end": 155,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 150,
                        "decorators": [],
                        "name": "z0",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectPattern",
                        "start": 152,
                        "end": 155,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 153,
                            "end": 154,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 154,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 154,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 157,
                      "end": 183,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 159,
                        "decorators": [],
                        "name": "z1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectPattern",
                        "start": 161,
                        "end": 183,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 162,
                            "end": 182,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 162,
                              "end": 165,
                              "decorators": [],
                              "name": "arr",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ArrayPattern",
                              "start": 167,
                              "end": 182,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 168,
                                  "end": 171,
                                  "decorators": [],
                                  "name": "el1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 173,
                                  "end": 176,
                                  "decorators": [],
                                  "name": "el2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 178,
                                  "end": 181,
                                  "decorators": [],
                                  "name": "el3",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 184,
                    "end": 249,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 186,
                      "end": 249,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 187,
                          "end": 198,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 187,
                            "end": 189,
                            "decorators": [],
                            "name": "x1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 189,
                            "end": 197,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 191,
                              "end": 197
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 199,
                          "end": 210,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 199,
                            "end": 201,
                            "decorators": [],
                            "name": "y1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 201,
                            "end": 209,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 203,
                              "end": 209
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 211,
                          "end": 227,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 211,
                            "end": 213,
                            "decorators": [],
                            "name": "z0",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 213,
                            "end": 226,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 215,
                              "end": 226,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 216,
                                  "end": 225,
                                  "accessibility": null,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 216,
                                    "end": 217,
                                    "decorators": [],
                                    "name": "n",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 217,
                                    "end": 225,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 219,
                                      "end": 225
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 228,
                          "end": 247,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 228,
                            "end": 230,
                            "decorators": [],
                            "name": "z1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 230,
                            "end": 247,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 232,
                              "end": 247,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 233,
                                  "end": 246,
                                  "accessibility": null,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 233,
                                    "end": 236,
                                    "decorators": [],
                                    "name": "arr",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 236,
                                    "end": 246,
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "start": 238,
                                      "end": 246,
                                      "elementType": {
                                        "type": "TSNumberKeyword",
                                        "start": 238,
                                        "end": 244
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 254,
            "end": 271,
            "body": {
              "type": "TSInterfaceBody",
              "start": 266,
              "end": 271,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 268,
                  "end": 269,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 269,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 276,
            "end": 321,
            "body": {
              "type": "TSModuleBlock",
              "start": 288,
              "end": 321,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 298,
                  "end": 315,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 305,
                    "end": 315,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 313,
                      "end": 315,
                      "body": []
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 312,
                      "decorators": [],
                      "name": "C",
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
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          },
          {
            "type": "ClassDeclaration",
            "start": 326,
            "end": 338,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 336,
              "end": 338,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 332,
              "end": 335,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 343,
            "end": 366,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 355,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 365,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 359,
                "end": 365
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 371,
            "end": 387,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 380,
              "end": 386
            },
            "typeParameters": null
          },
          {
            "type": "ImportDeclaration",
            "start": 392,
            "end": 420,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 413,
              "end": 419,
              "raw": "\"./x0\"",
              "value": "./x0"
            },
            "specifiers": [
              {
                "type": "ImportNamespaceSpecifier",
                "start": 399,
                "end": 407,
                "local": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 407,
                  "decorators": [],
                  "name": "all",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "ImportDeclaration",
            "start": 425,
            "end": 448,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 441,
              "end": 447,
              "raw": "\"./x0\"",
              "value": "./x0"
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 433,
                "end": 434,
                "imported": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          {
            "type": "ExportAllDeclaration",
            "start": 453,
            "end": 474,
            "attributes": [],
            "exported": null,
            "exportKind": "value",
            "source": {
              "type": "Literal",
              "start": 467,
              "end": 473,
              "raw": "\"./x0\"",
              "value": "./x0"
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 479,
            "end": 502,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": {
              "type": "Literal",
              "start": 495,
              "end": 501,
              "raw": "\"./x0\"",
              "value": "./x0"
            },
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 487,
                "end": 488,
                "exported": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 488,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 488,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 55,
        "end": 69,
        "raw": "\"./observable\"",
        "value": "./observable"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 506,
      "end": 550,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 530,
        "end": 550,
        "body": [
          {
            "type": "TSExportAssignment",
            "start": 536,
            "end": 548,
            "expression": {
              "type": "Identifier",
              "start": 545,
              "end": 547,
              "decorators": [],
              "name": "N1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 521,
        "end": 529,
        "raw": "\"./test\"",
        "value": "./test"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 551,
      "end": 560,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 89,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 89,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 89,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 41,
              "end": 87,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 47,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 47,
                "end": 87,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 70,
                    "decorators": [],
                    "name": "pred",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 70,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 54,
                        "end": 70,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 55,
                            "end": 58,
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 56,
                              "end": 58,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 57,
                                "end": 58,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 57,
                                  "end": 58,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 60,
                          "end": 70,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 63,
                            "end": 70
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 73,
                    "end": 86,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 83,
                      "end": 86,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 84,
                          "end": 85,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 83,
                      "decorators": [],
                      "name": "Observable",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "decorators": [],
          "name": "Observable",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 31,
          "end": 34,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 32,
              "end": 33,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 90,
      "end": 107,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 97,
        "end": 107,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 101,
            "end": 106,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 105,
              "end": 106,
              "raw": "1",
              "value": 1
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 41,
        "raw": "\"./observable\"",
        "value": "./observable"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 42,
      "end": 55,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 54,
        "raw": "\"./x\"",
        "value": "./x"
      },
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
