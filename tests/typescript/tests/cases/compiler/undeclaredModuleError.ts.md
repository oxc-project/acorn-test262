__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 599,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 24,
          "value": "fs",
          "raw": "'fs'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 43,
        "decorators": [],
        "name": "readdir",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 44,
          "end": 56,
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 56,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 50,
              "end": 56
            }
          }
        },
        {
          "type": "Identifier",
          "start": 58,
          "end": 107,
          "decorators": [],
          "name": "accept",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 107,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 66,
              "end": 107,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 67,
                  "end": 81,
                  "decorators": [],
                  "name": "stat",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 71,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 73,
                      "end": 81,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 73,
                        "end": 81,
                        "left": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 75,
                          "decorators": [],
                          "name": "fs",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 81,
                          "decorators": [],
                          "name": "Stats",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 95,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 87,
                    "end": 95,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 89,
                      "end": 95
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 97,
                "end": 107,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 100,
                  "end": 107
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 109,
          "end": 187,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 187,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 119,
              "end": 187,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 120,
                  "end": 132,
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 127,
                      "end": 132,
                      "typeName": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 132,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 134,
                  "end": 178,
                  "decorators": [],
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 141,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 143,
                      "end": 178,
                      "elementType": {
                        "type": "TSTypeLiteral",
                        "start": 143,
                        "end": 176,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 145,
                            "end": 158,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 145,
                              "end": 149,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 149,
                              "end": 157,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 151,
                                "end": 157
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 159,
                            "end": 174,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 159,
                              "end": 163,
                              "decorators": [],
                              "name": "stat",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 163,
                              "end": 173,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 165,
                                "end": 173,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 165,
                                  "end": 173,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 165,
                                    "end": 167,
                                    "decorators": [],
                                    "name": "fs",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 168,
                                    "end": 173,
                                    "decorators": [],
                                    "name": "Stats",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 180,
                "end": 187,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 183,
                  "end": 187
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 192,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 207,
        "decorators": [],
        "name": "join",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 208,
          "end": 226,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 211,
            "end": 216,
            "decorators": [],
            "name": "paths",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 216,
            "end": 226,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 218,
              "end": 226,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 218,
                "end": 224
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 228,
        "end": 230,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 232,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 255,
        "decorators": [],
        "name": "instrumentFile",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 256,
          "end": 274,
          "decorators": [],
          "name": "covFileDir",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 274,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 268,
              "end": 274
            }
          }
        },
        {
          "type": "Identifier",
          "start": 276,
          "end": 295,
          "decorators": [],
          "name": "covFileName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 287,
            "end": 295,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 289,
              "end": 295
            }
          }
        },
        {
          "type": "Identifier",
          "start": 297,
          "end": 321,
          "decorators": [],
          "name": "originalFilePath",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 313,
            "end": 321,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 315,
              "end": 321
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 323,
        "end": 599,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 329,
            "end": 597,
            "expression": {
              "type": "CallExpression",
              "start": 329,
              "end": 596,
              "callee": {
                "type": "MemberExpression",
                "start": 329,
                "end": 340,
                "object": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 331,
                  "decorators": [],
                  "name": "fs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 340,
                  "decorators": [],
                  "name": "readFile",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 341,
                  "end": 357,
                  "decorators": [],
                  "name": "originalFilePath",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 359,
                  "end": 594,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 365,
                    "end": 594,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 382,
                        "end": 588,
                        "expression": {
                          "type": "CallExpression",
                          "start": 382,
                          "end": 587,
                          "callee": {
                            "type": "Identifier",
                            "start": 382,
                            "end": 389,
                            "decorators": [],
                            "name": "readdir",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 390,
                              "end": 400,
                              "decorators": [],
                              "name": "covFileDir",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 402,
                              "end": 419,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 408,
                                "end": 419,
                                "body": []
                              },
                              "id": null,
                              "generator": false
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 422,
                              "end": 585,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 423,
                                  "end": 435,
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 428,
                                    "end": 435,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 430,
                                      "end": 435,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 430,
                                        "end": 435,
                                        "decorators": [],
                                        "name": "Error",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 437,
                                  "end": 448,
                                  "decorators": [],
                                  "name": "files",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 442,
                                    "end": 448,
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "start": 444,
                                      "end": 448,
                                      "elementType": {
                                        "type": "TSTypeLiteral",
                                        "start": 444,
                                        "end": 446,
                                        "members": []
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 453,
                                "end": 585,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 471,
                                    "end": 571,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 471,
                                      "end": 570,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 471,
                                        "end": 484,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 471,
                                          "end": 476,
                                          "decorators": [],
                                          "name": "files",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 477,
                                          "end": 484,
                                          "decorators": [],
                                          "name": "forEach",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "ArrowFunctionExpression",
                                          "start": 485,
                                          "end": 568,
                                          "expression": false,
                                          "async": false,
                                          "typeParameters": null,
                                          "params": [
                                            {
                                              "type": "Identifier",
                                              "start": 486,
                                              "end": 490,
                                              "decorators": [],
                                              "name": "file",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "returnType": null,
                                          "body": {
                                            "type": "BlockStatement",
                                            "start": 495,
                                            "end": 568,
                                            "body": [
                                              {
                                                "type": "VariableDeclaration",
                                                "start": 517,
                                                "end": 550,
                                                "kind": "var",
                                                "declarations": [
                                                  {
                                                    "type": "VariableDeclarator",
                                                    "start": 521,
                                                    "end": 549,
                                                    "id": {
                                                      "type": "Identifier",
                                                      "start": 521,
                                                      "end": 529,
                                                      "decorators": [],
                                                      "name": "fullPath",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "init": {
                                                      "type": "CallExpression",
                                                      "start": 532,
                                                      "end": 549,
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "start": 532,
                                                        "end": 536,
                                                        "decorators": [],
                                                        "name": "join",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "typeArguments": null,
                                                      "arguments": [
                                                        {
                                                          "type": "Identifier",
                                                          "start": 537,
                                                          "end": 548,
                                                          "decorators": [],
                                                          "name": "IDoNotExist",
                                                          "optional": false,
                                                          "typeAnnotation": null
                                                        }
                                                      ],
                                                      "optional": false
                                                    },
                                                    "definite": false
                                                  }
                                                ],
                                                "declare": false
                                              }
                                            ]
                                          },
                                          "id": null,
                                          "generator": false
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
