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
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "decorators": [],
              "name": "private1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 30,
              "end": 37,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 42,
            "end": 100,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 51,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 82,
                      "decorators": [],
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 83,
                      "end": 94,
                      "body": []
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
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 290,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 113,
              "end": 290,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 117,
                  "end": 289,
                  "id": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 289,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null
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
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 157,
                                    "end": 164,
                                    "decorators": [],
                                    "name": "public1",
                                    "optional": false,
                                    "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "m2",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 181,
                                      "end": 188,
                                      "decorators": [],
                                      "name": "public1",
                                      "optional": false,
                                      "typeAnnotation": null
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
                              "decorators": [],
                              "name": "method",
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
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 230,
                                  "end": 238,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 232,
                                    "end": 238
                                  }
                                }
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
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 261,
                                  "end": 269,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 263,
                                    "end": 269
                                  }
                                }
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
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 275,
                                    "end": 282,
                                    "decorators": [],
                                    "name": "public1",
                                    "optional": false,
                                    "typeAnnotation": null
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
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 295,
            "end": 439,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 302,
              "end": 439,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 306,
                  "end": 438,
                  "id": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 308,
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 322,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "NewExpression",
                          "start": 324,
                          "end": 338,
                          "callee": {
                            "type": "Identifier",
                            "start": 328,
                            "end": 336,
                            "decorators": [],
                            "name": "private1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 348,
                        "end": 367,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "m2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 358,
                              "end": 365,
                              "decorators": [],
                              "name": "public1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 377,
                        "end": 432,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 383,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 383,
                          "end": 432,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                    "decorators": [],
                                    "name": "private1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                }
                              }
                            ]
                          },
                          "expression": false
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 444,
            "end": 462,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 451,
              "end": 462,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 455,
                  "end": 461,
                  "id": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 457,
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 461,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 489,
            "end": 531,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 496,
              "end": 531,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 500,
                  "end": 530,
                  "id": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 530,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
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
                                "decorators": [],
                                "name": "m2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 523,
                                "end": 530,
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 536,
            "end": 554,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 543,
              "end": 554,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 547,
                  "end": 553,
                  "id": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 549,
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 584,
            "end": 630,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 591,
              "end": 630,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 595,
                  "end": 629,
                  "id": {
                    "type": "Identifier",
                    "start": 595,
                    "end": 629,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
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
                                "decorators": [],
                                "name": "m2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 622,
                                "end": 629,
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 635,
            "end": 653,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 642,
              "end": 653,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 646,
                  "end": 652,
                  "id": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 648,
                    "decorators": [],
                    "name": "z2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 651,
                    "end": 652,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
