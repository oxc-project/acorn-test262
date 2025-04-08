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
        "name": "fs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "readdir",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 44,
          "end": 56,
          "name": "path",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 56,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 50,
              "end": 56
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 58,
          "end": 107,
          "name": "accept",
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
                  "name": "stat",
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
                          "name": "fs",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 81,
                          "name": "Stats",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 95,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 87,
                    "end": 95,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 89,
                      "end": 95
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 109,
          "end": 187,
          "name": "callback",
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
                  "name": "error",
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
                        "name": "Error",
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
                {
                  "type": "Identifier",
                  "start": 134,
                  "end": 178,
                  "name": "results",
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
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "stat",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                    "name": "fs",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 168,
                                    "end": 173,
                                    "name": "Stats",
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
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 192,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 207,
        "name": "join",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 208,
          "end": 226,
          "argument": {
            "type": "Identifier",
            "start": 211,
            "end": 216,
            "name": "paths",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
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
      "body": {
        "type": "BlockStatement",
        "start": 228,
        "end": 230,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 232,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 255,
        "name": "instrumentFile",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 256,
          "end": 274,
          "name": "covFileDir",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 274,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 268,
              "end": 274
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 276,
          "end": 295,
          "name": "covFileName",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 287,
            "end": 295,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 289,
              "end": 295
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 297,
          "end": 321,
          "name": "originalFilePath",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 313,
            "end": 321,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 315,
              "end": 321
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "fs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 340,
                  "name": "readFile",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 341,
                  "end": 357,
                  "name": "originalFilePath",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 359,
                  "end": 594,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                            "name": "readdir",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 390,
                              "end": 400,
                              "name": "covFileDir",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 402,
                              "end": 419,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 408,
                                "end": 419,
                                "body": []
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 422,
                              "end": 585,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 423,
                                  "end": 435,
                                  "name": "error",
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
                                        "name": "Error",
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
                                {
                                  "type": "Identifier",
                                  "start": 437,
                                  "end": 448,
                                  "name": "files",
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
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
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
                                          "name": "files",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 477,
                                          "end": 484,
                                          "name": "forEach",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "ArrowFunctionExpression",
                                          "start": 485,
                                          "end": 568,
                                          "id": null,
                                          "expression": false,
                                          "generator": false,
                                          "async": false,
                                          "params": [
                                            {
                                              "type": "Identifier",
                                              "start": 486,
                                              "end": 490,
                                              "name": "file",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          ],
                                          "body": {
                                            "type": "BlockStatement",
                                            "start": 495,
                                            "end": 568,
                                            "body": [
                                              {
                                                "type": "VariableDeclaration",
                                                "start": 517,
                                                "end": 550,
                                                "declarations": [
                                                  {
                                                    "type": "VariableDeclarator",
                                                    "start": 521,
                                                    "end": 549,
                                                    "id": {
                                                      "type": "Identifier",
                                                      "start": 521,
                                                      "end": 529,
                                                      "name": "fullPath",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "init": {
                                                      "type": "CallExpression",
                                                      "start": 532,
                                                      "end": 549,
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "start": 532,
                                                        "end": 536,
                                                        "name": "join",
                                                        "typeAnnotation": null,
                                                        "decorators": [],
                                                        "optional": false
                                                      },
                                                      "arguments": [
                                                        {
                                                          "type": "Identifier",
                                                          "start": 537,
                                                          "end": 548,
                                                          "name": "IDoNotExist",
                                                          "typeAnnotation": null,
                                                          "decorators": [],
                                                          "optional": false
                                                        }
                                                      ],
                                                      "optional": false,
                                                      "typeArguments": null
                                                    },
                                                    "definite": false
                                                  }
                                                ],
                                                "kind": "var",
                                                "declare": false
                                              }
                                            ]
                                          },
                                          "typeParameters": null,
                                          "returnType": null
                                        }
                                      ],
                                      "optional": false,
                                      "typeArguments": null
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "typeParameters": null,
                              "returnType": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
