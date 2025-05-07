__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 79,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 77,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 77,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 71,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 56,
                      "end": 70,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 58,
                          "end": 62,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 59,
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
                            "start": 61,
                            "end": 62,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 64,
                          "end": 68,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 65,
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
                            "start": 67,
                            "end": 68,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 36,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
  "end": 89,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 88,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 88,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 86,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 86,
              "body": {
                "type": "TSModuleBlock",
                "start": 35,
                "end": 86,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 45,
                    "end": 80,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 52,
                      "end": 80,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 56,
                          "end": 79,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 56,
                            "end": 62,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "start": 65,
                            "end": 79,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 67,
                                "end": 71,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 67,
                                  "end": 68,
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
                                  "start": 70,
                                  "end": 71,
                                  "raw": "0",
                                  "value": 0,
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "Property",
                                "start": 73,
                                "end": 77,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 74,
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
                                  "start": 76,
                                  "end": 77,
                                  "raw": "0",
                                  "value": 0,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ]
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
                "start": 29,
                "end": 34,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
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
  "end": 171,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 38,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 38,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 8,
                "end": 38,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 11,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 14,
                    "end": 38,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 16,
                        "end": 26,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 16,
                          "end": 17,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 17,
                          "end": 25,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 19,
                            "end": 25
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 27,
                        "end": 36,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 27,
                          "end": 28,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 28,
                          "end": 36,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 30,
                            "end": 36
                          }
                        }
                      }
                    ]
                  }
                },
                "typeParameters": null
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
      "start": 40,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 46,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 49,
            "end": 56,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 51,
              "end": 56,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 92,
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 67,
                "end": 92,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 69,
                    "end": 79,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 80,
                    "end": 90,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                  }
                ]
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
      "start": 93,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 99,
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 102,
            "end": 111,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 102,
              "end": 109,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 104,
                "end": 109,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 119,
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 122,
            "end": 136,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 122,
              "end": 129,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 124,
                "end": 129,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 130,
              "end": 136,
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
  "end": 399,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 157,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 157,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 78,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 23,
              "end": 78,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 78,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 50,
                    "end": 72,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 57,
                      "end": 71,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 59,
                          "end": 63,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 59,
                            "end": 60,
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
                            "start": 62,
                            "end": 63,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 65,
                          "end": 69,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
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
                            "start": 68,
                            "end": 69,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 84,
            "end": 155,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 91,
              "end": 155,
              "body": {
                "type": "TSModuleBlock",
                "start": 104,
                "end": 155,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 114,
                    "end": 149,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 121,
                      "end": 149,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 125,
                          "end": 148,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 131,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "start": 134,
                            "end": 148,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 136,
                                "end": 140,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 136,
                                  "end": 137,
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
                                  "start": 139,
                                  "end": 140,
                                  "raw": "0",
                                  "value": 0,
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "Property",
                                "start": 142,
                                "end": 146,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 142,
                                  "end": 143,
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
                                  "start": 145,
                                  "end": 146,
                                  "raw": "0",
                                  "value": 0,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ]
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
                "start": 98,
                "end": 103,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
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
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 197,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 197,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 197,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 167,
                "end": 197,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 170,
                  "end": 197,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 173,
                    "end": 197,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 175,
                        "end": 185,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 176,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 176,
                          "end": 184,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 178,
                            "end": 184
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 186,
                        "end": 195,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 187,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 187,
                          "end": 195,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 189,
                            "end": 195
                          }
                        }
                      }
                    ]
                  }
                },
                "typeParameters": null
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
      "start": 199,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 205,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 208,
            "end": 215,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 210,
              "end": 215,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 354,
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 329,
                "end": 354,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 331,
                    "end": 341,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 332,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 332,
                      "end": 340,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 334,
                        "end": 340
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 342,
                    "end": 352,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 343,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 343,
                      "end": 351,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 345,
                        "end": 351
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 373,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 364,
            "end": 373,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 364,
              "end": 371,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 364,
                "end": 365,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 366,
                "end": 371,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 375,
      "end": 399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 398,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 381,
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 384,
            "end": 398,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 384,
              "end": 391,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 384,
                "end": 385,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 386,
                "end": 391,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 392,
              "end": 398,
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
