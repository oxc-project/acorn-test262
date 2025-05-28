__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 79,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 79,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 79,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 28,
              "end": 40,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 28,
                "end": 31,
                "decorators": [],
                "name": "day",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 33,
                  "end": 39
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 45,
              "end": 59,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 45,
                "end": 50,
                "decorators": [],
                "name": "month",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 52,
                  "end": 58
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 64,
              "end": 77,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 68,
                "decorators": [],
                "name": "year",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 68,
                "end": 76,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 70,
                  "end": 76
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 132,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 88,
        "end": 132,
        "id": {
          "type": "Identifier",
          "start": 98,
          "end": 103,
          "decorators": [],
          "name": "Event",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 104,
          "end": 132,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 110,
              "end": 130,
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "start": 117,
                "end": 130,
                "id": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 126,
                  "end": 129
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 367,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 366,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 29,
        "value": "node:console",
        "raw": "'node:console'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 366,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 36,
            "end": 331,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 42,
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 43,
              "end": 331,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 53,
                  "end": 131,
                  "id": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 70,
                    "decorators": [],
                    "name": "Console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 71,
                    "end": 131,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 85,
                        "end": 121,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 92,
                          "decorators": [],
                          "name": "Console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 92,
                          "end": 120,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 94,
                            "end": 120,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 94,
                              "end": 120,
                              "left": {
                                "type": "Identifier",
                                "start": 94,
                                "end": 101,
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 120,
                                "decorators": [],
                                "name": "ConsoleConstructor",
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
                  },
                  "declare": false
                },
                {
                  "type": "TSModuleDeclaration",
                  "start": 140,
                  "end": 295,
                  "id": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 157,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 158,
                    "end": 295,
                    "body": [
                      {
                        "type": "TSInterfaceDeclaration",
                        "start": 172,
                        "end": 285,
                        "id": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 200,
                          "decorators": [],
                          "name": "ConsoleConstructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 201,
                          "end": 285,
                          "body": [
                            {
                              "type": "TSPropertySignature",
                              "start": 219,
                              "end": 238,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 219,
                                "end": 228,
                                "decorators": [],
                                "name": "prototype",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 228,
                                "end": 237,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 230,
                                  "end": 237,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 230,
                                    "end": 237,
                                    "decorators": [],
                                    "name": "Console",
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
                              "type": "TSConstructSignatureDeclaration",
                              "start": 255,
                              "end": 271,
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 261,
                                "end": 270,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 263,
                                  "end": 270,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 263,
                                    "end": 270,
                                    "decorators": [],
                                    "name": "Console",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        },
                        "declare": false
                      }
                    ]
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 304,
                  "end": 325,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 308,
                      "end": 324,
                      "id": {
                        "type": "Identifier",
                        "start": 308,
                        "end": 324,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 315,
                          "end": 324,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 317,
                            "end": 324,
                            "typeName": {
                              "type": "Identifier",
                              "start": 317,
                              "end": 324,
                              "decorators": [],
                              "name": "Console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "kind": "global",
            "declare": false,
            "global": true
          },
          {
            "type": "TSExportAssignment",
            "start": 336,
            "end": 364,
            "expression": {
              "type": "MemberExpression",
              "start": 345,
              "end": 363,
              "object": {
                "type": "Identifier",
                "start": 345,
                "end": 355,
                "decorators": [],
                "name": "globalThis",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 356,
                "end": 363,
                "decorators": [],
                "name": "console",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 196,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 20,
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 20,
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 37,
        "value": "./types",
        "raw": "'./types'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "foo",
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
          "start": 52,
          "end": 59,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 59,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 59,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 59,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 136,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 67,
            "end": 110,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 73,
                "end": 109,
                "id": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 77,
                  "end": 109,
                  "callee": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 85,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 86,
                      "end": 92,
                      "object": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 92,
                        "decorators": [],
                        "name": "year",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    {
                      "type": "MemberExpression",
                      "start": 94,
                      "end": 101,
                      "object": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 101,
                        "decorators": [],
                        "name": "month",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    {
                      "type": "MemberExpression",
                      "start": 103,
                      "end": 108,
                      "object": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 104,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 108,
                        "decorators": [],
                        "name": "day",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 115,
            "end": 134,
            "argument": {
              "type": "CallExpression",
              "start": 122,
              "end": 133,
              "callee": {
                "type": "MemberExpression",
                "start": 122,
                "end": 131,
                "object": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 131,
                  "decorators": [],
                  "name": "getTime",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 137,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 149,
        "decorators": [],
        "name": "bar",
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
        "start": 152,
        "end": 195,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 158,
            "end": 193,
            "argument": {
              "type": "TSAsExpression",
              "start": 165,
              "end": 192,
              "expression": {
                "type": "NewExpression",
                "start": 165,
                "end": 181,
                "callee": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 174,
                  "decorators": [],
                  "name": "Event",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 175,
                    "end": 180,
                    "value": "bar",
                    "raw": "'bar'"
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 192,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 185,
                  "end": 192,
                  "left": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 190,
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "expression": false
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
  "end": 276,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 20,
          "end": 25,
          "imported": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 42,
        "value": "./types",
        "raw": "'./types'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 83,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 53,
          "end": 60,
          "imported": {
            "type": "Identifier",
            "start": 53,
            "end": 60,
            "decorators": [],
            "name": "Console",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 53,
            "end": 60,
            "decorators": [],
            "name": "Console",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 82,
        "value": "node:console",
        "raw": "'node:console'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "decorators": [],
        "name": "foo",
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
          "start": 97,
          "end": 104,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 104,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 100,
              "end": 104,
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 104,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 106,
        "end": 181,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 112,
            "end": 155,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 154,
                "id": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 122,
                  "end": 154,
                  "callee": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 130,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 131,
                      "end": 137,
                      "object": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 137,
                        "decorators": [],
                        "name": "year",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    {
                      "type": "MemberExpression",
                      "start": 139,
                      "end": 146,
                      "object": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 140,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 146,
                        "decorators": [],
                        "name": "month",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    {
                      "type": "MemberExpression",
                      "start": 148,
                      "end": 153,
                      "object": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 153,
                        "decorators": [],
                        "name": "day",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 160,
            "end": 179,
            "argument": {
              "type": "CallExpression",
              "start": 167,
              "end": 178,
              "callee": {
                "type": "MemberExpression",
                "start": 167,
                "end": 176,
                "object": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 168,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 176,
                  "decorators": [],
                  "name": "getTime",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 194,
        "decorators": [],
        "name": "bar",
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
        "start": 197,
        "end": 240,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 203,
            "end": 238,
            "argument": {
              "type": "TSAsExpression",
              "start": 210,
              "end": 237,
              "expression": {
                "type": "NewExpression",
                "start": 210,
                "end": 226,
                "callee": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 219,
                  "decorators": [],
                  "name": "Event",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 220,
                    "end": 225,
                    "value": "bar",
                    "raw": "'bar'"
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 230,
                "end": 237,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 230,
                  "end": 237,
                  "left": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 235,
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 237,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 276,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 275,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 259,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 252,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 259,
                  "decorators": [],
                  "name": "Console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 262,
            "end": 275,
            "callee": {
              "type": "Identifier",
              "start": 266,
              "end": 273,
              "decorators": [],
              "name": "Console",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
