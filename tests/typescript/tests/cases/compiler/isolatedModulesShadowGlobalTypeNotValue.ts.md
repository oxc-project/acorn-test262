__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 21
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "day",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 31
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 33,
                  "end": 39
                },
                "start": 31,
                "end": 39
              },
              "accessibility": null,
              "static": false,
              "start": 28,
              "end": 40
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "month",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 50
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 52,
                  "end": 58
                },
                "start": 50,
                "end": 58
              },
              "accessibility": null,
              "static": false,
              "start": 45,
              "end": 59
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "year",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 68
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 70,
                  "end": 76
                },
                "start": 68,
                "end": 76
              },
              "accessibility": null,
              "static": false,
              "start": 64,
              "end": 77
            }
          ],
          "start": 22,
          "end": 79
        },
        "declare": false,
        "start": 7,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 79
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Event",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 103
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 126,
                  "end": 129
                },
                "declare": false,
                "start": 117,
                "end": 130
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 110,
              "end": 130
            }
          ],
          "start": 104,
          "end": 132
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 88,
        "end": 132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 81,
      "end": 132
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "node:console",
        "raw": "'node:console'",
        "start": 15,
        "end": 29
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 42
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 70
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 85,
                          "end": 92
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 94,
                                "end": 101
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ConsoleConstructor",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 102,
                                "end": 120
                              },
                              "start": 94,
                              "end": 120
                            },
                            "typeArguments": null,
                            "start": 94,
                            "end": 120
                          },
                          "start": 92,
                          "end": 120
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 85,
                        "end": 121
                      }
                    ],
                    "start": 71,
                    "end": 131
                  },
                  "declare": false,
                  "start": 53,
                  "end": 131
                },
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 157
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [
                      {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ConsoleConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 200
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prototype",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 219,
                                "end": 228
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 230,
                                    "end": 237
                                  },
                                  "typeArguments": null,
                                  "start": 230,
                                  "end": 237
                                },
                                "start": 228,
                                "end": 237
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 219,
                              "end": 238
                            },
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 263,
                                    "end": 270
                                  },
                                  "typeArguments": null,
                                  "start": 263,
                                  "end": 270
                                },
                                "start": 261,
                                "end": 270
                              },
                              "start": 255,
                              "end": 271
                            }
                          ],
                          "start": 201,
                          "end": 285
                        },
                        "declare": false,
                        "start": 172,
                        "end": 285
                      }
                    ],
                    "start": 158,
                    "end": 295
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 140,
                  "end": 295
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 317,
                              "end": 324
                            },
                            "typeArguments": null,
                            "start": 317,
                            "end": 324
                          },
                          "start": 315,
                          "end": 324
                        },
                        "start": 308,
                        "end": 324
                      },
                      "init": null,
                      "definite": false,
                      "start": 308,
                      "end": 324
                    }
                  ],
                  "declare": false,
                  "start": 304,
                  "end": 325
                }
              ],
              "start": 43,
              "end": 331
            },
            "kind": "global",
            "declare": false,
            "global": true,
            "start": 36,
            "end": 331
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "globalThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 355
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "console",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 363
              },
              "optional": false,
              "computed": false,
              "start": 345,
              "end": 363
            },
            "start": 336,
            "end": 364
          }
        ],
        "start": 30,
        "end": 366
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 366
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 367
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 20
          },
          "importKind": "value",
          "start": 15,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "'./types'",
        "start": 28,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 51
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 59
              },
              "typeArguments": null,
              "start": 55,
              "end": 59
            },
            "start": 53,
            "end": 59
          },
          "start": 52,
          "end": 59
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 85
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 87
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "year",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 92
                      },
                      "optional": false,
                      "computed": false,
                      "start": 86,
                      "end": 92
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 95
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "month",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 96,
                        "end": 101
                      },
                      "optional": false,
                      "computed": false,
                      "start": 94,
                      "end": 101
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 104
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "day",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 108
                      },
                      "optional": false,
                      "computed": false,
                      "start": 103,
                      "end": 108
                    }
                  ],
                  "start": 77,
                  "end": 109
                },
                "definite": false,
                "start": 73,
                "end": 109
              }
            ],
            "declare": false,
            "start": 67,
            "end": 110
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getTime",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 131
                },
                "optional": false,
                "computed": false,
                "start": 122,
                "end": 131
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 122,
              "end": 133
            },
            "start": 115,
            "end": 134
          }
        ],
        "start": 61,
        "end": 136
      },
      "expression": false,
      "start": 39,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 149
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Event",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 174
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 175,
                    "end": 180
                  }
                ],
                "start": 165,
                "end": 181
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 190
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "start": 185,
                  "end": 192
                },
                "typeArguments": null,
                "start": 185,
                "end": 192
              },
              "start": 165,
              "end": 192
            },
            "start": 158,
            "end": 193
          }
        ],
        "start": 152,
        "end": 195
      },
      "expression": false,
      "start": 137,
      "end": 195
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 196
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "importKind": "value",
          "start": 14,
          "end": 18
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 25
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Event",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 25
          },
          "importKind": "value",
          "start": 20,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "'./types'",
        "start": 33,
        "end": 42
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 43
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Console",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 60
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Console",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 60
          },
          "importKind": "value",
          "start": 53,
          "end": 60
        }
      ],
      "source": {
        "type": "Literal",
        "value": "node:console",
        "raw": "'node:console'",
        "start": 68,
        "end": 82
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 83
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 96
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 104
              },
              "typeArguments": null,
              "start": 100,
              "end": 104
            },
            "start": 98,
            "end": 104
          },
          "start": 97,
          "end": 104
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 119
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 130
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "year",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 137
                      },
                      "optional": false,
                      "computed": false,
                      "start": 131,
                      "end": 137
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 140
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "month",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 146
                      },
                      "optional": false,
                      "computed": false,
                      "start": 139,
                      "end": 146
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 149
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "day",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 153
                      },
                      "optional": false,
                      "computed": false,
                      "start": 148,
                      "end": 153
                    }
                  ],
                  "start": 122,
                  "end": 154
                },
                "definite": false,
                "start": 118,
                "end": 154
              }
            ],
            "declare": false,
            "start": 112,
            "end": 155
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 168
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getTime",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 176
                },
                "optional": false,
                "computed": false,
                "start": 167,
                "end": 176
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 167,
              "end": 178
            },
            "start": 160,
            "end": 179
          }
        ],
        "start": 106,
        "end": 181
      },
      "expression": false,
      "start": 84,
      "end": 181
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 194
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Event",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 219
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 220,
                    "end": 225
                  }
                ],
                "start": 210,
                "end": 226
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 235
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 237
                  },
                  "start": 230,
                  "end": 237
                },
                "typeArguments": null,
                "start": 230,
                "end": 237
              },
              "start": 210,
              "end": 237
            },
            "start": 203,
            "end": 238
          }
        ],
        "start": 197,
        "end": 240
      },
      "expression": false,
      "start": 182,
      "end": 240
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 259
                },
                "typeArguments": null,
                "start": 252,
                "end": 259
              },
              "start": 250,
              "end": 259
            },
            "start": 247,
            "end": 259
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Console",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [],
            "start": 262,
            "end": 275
          },
          "definite": false,
          "start": 247,
          "end": 275
        }
      ],
      "declare": false,
      "start": 241,
      "end": 276
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 276
}
```
