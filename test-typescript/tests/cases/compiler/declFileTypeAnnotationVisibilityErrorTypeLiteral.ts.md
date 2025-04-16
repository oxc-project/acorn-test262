__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 655,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 655,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 655,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 15,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "name": "private1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 30,
              "end": 37,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 42,
            "end": 100,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 51,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 52,
              "end": 100,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 62,
                  "end": 94,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 69,
                    "end": 94,
                    "id": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 82,
                      "name": "public1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 83,
                      "end": 94,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
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
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 290,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 113,
              "end": 290,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 117,
                  "end": 289,
                  "id": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 289,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 118,
                      "end": 289,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 120,
                        "end": 289,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 130,
                            "end": 142,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 130,
                              "end": 131,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 131,
                              "end": 141,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 133,
                                "end": 141,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 133,
                                  "end": 141,
                                  "name": "private1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 151,
                            "end": 165,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 151,
                              "end": 152,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 152,
                              "end": 164,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 154,
                                "end": 164,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 154,
                                  "end": 164,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 154,
                                    "end": 156,
                                    "name": "m2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 157,
                                    "end": 164,
                                    "name": "public1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 174,
                            "end": 191,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 176,
                              "end": 190,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 178,
                                "end": 190,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 178,
                                  "end": 188,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 178,
                                    "end": 188,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 178,
                                      "end": 180,
                                      "name": "m2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 181,
                                      "end": 188,
                                      "name": "public1",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          },
                          {
                            "type": "TSMethodSignature",
                            "start": 200,
                            "end": 219,
                            "key": {
                              "type": "Identifier",
                              "start": 200,
                              "end": 206,
                              "name": "method",
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
                              "start": 208,
                              "end": 218,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 210,
                                "end": 218,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 210,
                                  "end": 218,
                                  "name": "private1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false
                          },
                          {
                            "type": "TSIndexSignature",
                            "start": 228,
                            "end": 250,
                            "parameters": [
                              {
                                "type": "Identifier",
                                "start": 229,
                                "end": 238,
                                "name": "n",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 230,
                                  "end": 238,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 232,
                                    "end": 238
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 239,
                              "end": 249,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 241,
                                "end": 249,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 241,
                                  "end": 249,
                                  "name": "private1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null
                          },
                          {
                            "type": "TSIndexSignature",
                            "start": 259,
                            "end": 283,
                            "parameters": [
                              {
                                "type": "Identifier",
                                "start": 260,
                                "end": 269,
                                "name": "s",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 261,
                                  "end": 269,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 263,
                                    "end": 269
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 270,
                              "end": 282,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 272,
                                "end": 282,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 272,
                                  "end": 282,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 272,
                                    "end": 274,
                                    "name": "m2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 275,
                                    "end": 282,
                                    "name": "public1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
            "type": "ExportNamedDeclaration",
            "start": 295,
            "end": 439,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 302,
              "end": 439,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 306,
                  "end": 438,
                  "id": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 308,
                    "name": "x2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 311,
                    "end": 438,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 321,
                        "end": 338,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 322,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "NewExpression",
                          "start": 324,
                          "end": 338,
                          "callee": {
                            "type": "Identifier",
                            "start": 328,
                            "end": 336,
                            "name": "private1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 348,
                        "end": 367,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "NewExpression",
                          "start": 351,
                          "end": 367,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 355,
                            "end": 365,
                            "object": {
                              "type": "Identifier",
                              "start": 355,
                              "end": 357,
                              "name": "m2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 358,
                              "end": 365,
                              "name": "public1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 377,
                        "end": 432,
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 383,
                          "name": "method",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 383,
                          "end": 432,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 386,
                            "end": 432,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 400,
                                "end": 422,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 407,
                                  "end": 421,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 411,
                                    "end": 419,
                                    "name": "private1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
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
            "type": "ExportNamedDeclaration",
            "start": 444,
            "end": 462,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 451,
              "end": 462,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 455,
                  "end": 461,
                  "id": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 457,
                    "name": "x3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 461,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "type": "ExportNamedDeclaration",
            "start": 489,
            "end": 531,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 496,
              "end": 531,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 500,
                  "end": 530,
                  "id": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 530,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 501,
                      "end": 530,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 503,
                        "end": 530,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 504,
                            "end": 515,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 505,
                              "end": 515,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 507,
                                "end": 515,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 507,
                                  "end": 515,
                                  "name": "private1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 517,
                          "end": 530,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 520,
                            "end": 530,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 520,
                              "end": 530,
                              "left": {
                                "type": "Identifier",
                                "start": 520,
                                "end": 522,
                                "name": "m2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 523,
                                "end": 530,
                                "name": "public1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
            "type": "ExportNamedDeclaration",
            "start": 536,
            "end": 554,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 543,
              "end": 554,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 547,
                  "end": 553,
                  "id": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 549,
                    "name": "y2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "type": "ExportNamedDeclaration",
            "start": 584,
            "end": 630,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 591,
              "end": 630,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 595,
                  "end": 629,
                  "id": {
                    "type": "Identifier",
                    "start": 595,
                    "end": 629,
                    "name": "z",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 596,
                      "end": 629,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 598,
                        "end": 629,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 603,
                            "end": 614,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 604,
                              "end": 614,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 606,
                                "end": 614,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 606,
                                  "end": 614,
                                  "name": "private1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 616,
                          "end": 629,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 619,
                            "end": 629,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 619,
                              "end": 629,
                              "left": {
                                "type": "Identifier",
                                "start": 619,
                                "end": 621,
                                "name": "m2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 622,
                                "end": 629,
                                "name": "public1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
            "type": "ExportNamedDeclaration",
            "start": 635,
            "end": 653,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 642,
              "end": 653,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 646,
                  "end": 652,
                  "id": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 648,
                    "name": "z2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 651,
                    "end": 652,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
