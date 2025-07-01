__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 27
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 45
          }
        ],
        "start": 9,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 55
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 68
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              },
              "start": 68,
              "end": 76
            },
            "accessibility": null,
            "static": false,
            "start": 64,
            "end": 76
          }
        ],
        "start": 58,
        "end": 78
      },
      "declare": false,
      "start": 49,
      "end": 78
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 95
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 102,
                          "end": 103
                        },
                        "typeArguments": null,
                        "start": 102,
                        "end": 103
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "prop",
                          "raw": "'prop'",
                          "start": 104,
                          "end": 110
                        },
                        "start": 104,
                        "end": 110
                      },
                      "start": 102,
                      "end": 111
                    },
                    "start": 100,
                    "end": 111
                  },
                  "start": 99,
                  "end": 111
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Omit",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 120
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 121,
                              "end": 122
                            },
                            "typeArguments": null,
                            "start": 121,
                            "end": 122
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "prop",
                              "raw": "'prop'",
                              "start": 124,
                              "end": 130
                            },
                            "start": 124,
                            "end": 130
                          }
                        ],
                        "start": 120,
                        "end": 131
                      },
                      "start": 116,
                      "end": 131
                    },
                    "start": 114,
                    "end": 131
                  },
                  "start": 113,
                  "end": 131
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 145
                        },
                        "typeArguments": null,
                        "start": 144,
                        "end": 145
                      },
                      "start": 138,
                      "end": 145
                    },
                    "start": 136,
                    "end": 145
                  },
                  "start": 133,
                  "end": 145
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Omit",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 151,
                        "end": 155
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 156,
                              "end": 157
                            },
                            "typeArguments": null,
                            "start": 156,
                            "end": 157
                          },
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 165,
                                "end": 166
                              },
                              "typeArguments": null,
                              "start": 165,
                              "end": 166
                            },
                            "start": 159,
                            "end": 166
                          }
                        ],
                        "start": 155,
                        "end": 167
                      },
                      "start": 151,
                      "end": 167
                    },
                    "start": 149,
                    "end": 167
                  },
                  "start": 147,
                  "end": 167
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 172,
                "end": 174
              },
              "id": null,
              "generator": false,
              "start": 98,
              "end": 174
            },
            "definite": false,
            "start": 93,
            "end": 174
          }
        ],
        "declare": false,
        "start": 87,
        "end": 175
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 80,
      "end": 175
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 26
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 28,
                  "end": 34
                },
                "start": 26,
                "end": 34
              },
              "accessibility": null,
              "static": false,
              "start": 22,
              "end": 34
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop2",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 44
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 46,
                  "end": 52
                },
                "start": 44,
                "end": 52
              },
              "accessibility": null,
              "static": false,
              "start": 39,
              "end": 52
            }
          ],
          "start": 16,
          "end": 54
        },
        "declare": false,
        "start": 7,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 54
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 69
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 82
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 84,
                  "end": 90
                },
                "start": 82,
                "end": 90
              },
              "accessibility": null,
              "static": false,
              "start": 78,
              "end": 90
            }
          ],
          "start": 72,
          "end": 92
        },
        "declare": false,
        "start": 63,
        "end": 92
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 56,
      "end": 92
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExp",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 112
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 120
                        },
                        "typeArguments": null,
                        "start": 119,
                        "end": 120
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "prop",
                          "raw": "'prop'",
                          "start": 121,
                          "end": 127
                        },
                        "start": 121,
                        "end": 127
                      },
                      "start": 119,
                      "end": 128
                    },
                    "start": 117,
                    "end": 128
                  },
                  "start": 116,
                  "end": 128
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Omit",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 137
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 138,
                              "end": 139
                            },
                            "typeArguments": null,
                            "start": 138,
                            "end": 139
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "prop",
                              "raw": "'prop'",
                              "start": 141,
                              "end": 147
                            },
                            "start": 141,
                            "end": 147
                          }
                        ],
                        "start": 137,
                        "end": 148
                      },
                      "start": 133,
                      "end": 148
                    },
                    "start": 131,
                    "end": 148
                  },
                  "start": 130,
                  "end": 148
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 161,
                          "end": 162
                        },
                        "typeArguments": null,
                        "start": 161,
                        "end": 162
                      },
                      "start": 155,
                      "end": 162
                    },
                    "start": 153,
                    "end": 162
                  },
                  "start": 150,
                  "end": 162
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Omit",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 172
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 173,
                              "end": 174
                            },
                            "typeArguments": null,
                            "start": 173,
                            "end": 174
                          },
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 182,
                                "end": 183
                              },
                              "typeArguments": null,
                              "start": 182,
                              "end": 183
                            },
                            "start": 176,
                            "end": 183
                          }
                        ],
                        "start": 172,
                        "end": 184
                      },
                      "start": 168,
                      "end": 184
                    },
                    "start": 166,
                    "end": 184
                  },
                  "start": 164,
                  "end": 184
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 189,
                "end": 191
              },
              "id": null,
              "generator": false,
              "start": 115,
              "end": 191
            },
            "definite": false,
            "start": 107,
            "end": 191
          }
        ],
        "declare": false,
        "start": 101,
        "end": 192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 94,
      "end": 192
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 193
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
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 10
          },
          "importKind": "value",
          "start": 8,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 17,
        "end": 22
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 22
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "fnExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 36
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fnExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 36
          },
          "importKind": "value",
          "start": 31,
          "end": 36
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./aExp",
        "raw": "'./aExp'",
        "start": 43,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 23,
      "end": 51
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 71
            },
            "definite": false,
            "start": 65,
            "end": 71
          }
        ],
        "declare": false,
        "start": 59,
        "end": 72
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 52,
      "end": 72
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fExp",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 90
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnExp",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 98
            },
            "definite": false,
            "start": 86,
            "end": 98
          }
        ],
        "declare": false,
        "start": 80,
        "end": 99
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 73,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 99
}
```
