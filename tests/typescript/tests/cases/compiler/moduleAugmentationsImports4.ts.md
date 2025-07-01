__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
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
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 17
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 19,
                  "end": 25
                },
                "start": 17,
                "end": 25
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 16,
              "end": 26
            }
          ],
          "start": 15,
          "end": 27
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 28
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
        "value": "C",
        "raw": "\"C\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 36,
                  "end": 46
                }
              ],
              "start": 35,
              "end": 48
            },
            "abstract": false,
            "declare": false,
            "start": 25,
            "end": 48
          }
        ],
        "start": 19,
        "end": 50
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
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
        "value": "D",
        "raw": "\"D\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "importKind": "value",
                "start": 33,
                "end": 34
              }
            ],
            "source": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 41,
              "end": 44
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 25,
            "end": 45
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "importKind": "value",
                "start": 58,
                "end": 59
              }
            ],
            "source": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 66,
              "end": 69
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 50,
            "end": 70
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 82,
              "end": 85
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 107
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getB",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 126
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 130,
                              "end": 131
                            },
                            "typeArguments": null,
                            "start": 130,
                            "end": 131
                          },
                          "start": 128,
                          "end": 131
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 122,
                        "end": 132
                      }
                    ],
                    "start": 108,
                    "end": 142
                  },
                  "declare": false,
                  "start": 96,
                  "end": 142
                }
              ],
              "start": 86,
              "end": 148
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 75,
            "end": 148
          }
        ],
        "start": 19,
        "end": 150
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 151
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
        "value": "E",
        "raw": "\"E\"",
        "start": 46,
        "end": 49
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 65
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 65
                },
                "importKind": "value",
                "start": 64,
                "end": 65
              }
            ],
            "source": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 72,
              "end": 75
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 56,
            "end": 76
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 92
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 92
                },
                "importKind": "value",
                "start": 89,
                "end": 92
              }
            ],
            "source": {
              "type": "Literal",
              "value": "C",
              "raw": "\"C\"",
              "start": 99,
              "end": 102
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 81,
            "end": 103
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 116,
              "end": 119
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getCls",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 162
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Cls",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 166,
                              "end": 169
                            },
                            "typeArguments": null,
                            "start": 166,
                            "end": 169
                          },
                          "start": 164,
                          "end": 169
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 156,
                        "end": 170
                      }
                    ],
                    "start": 142,
                    "end": 180
                  },
                  "declare": false,
                  "start": 130,
                  "end": 180
                }
              ],
              "start": 120,
              "end": 186
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 109,
            "end": 186
          }
        ],
        "start": 50,
        "end": 188
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 31,
      "end": 188
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 31,
  "end": 189
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "importKind": "value",
          "start": 70,
          "end": 71
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 78,
        "end": 83
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 62,
      "end": 84
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "D",
        "raw": "\"D\"",
        "start": 92,
        "end": 95
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 85,
      "end": 96
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "E",
        "raw": "\"E\"",
        "start": 104,
        "end": 107
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 97,
      "end": 108
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 118
                },
                "typeArguments": null,
                "start": 117,
                "end": 118
              },
              "start": 115,
              "end": 118
            },
            "start": 114,
            "end": 118
          },
          "init": null,
          "definite": false,
          "start": 114,
          "end": 118
        }
      ],
      "declare": false,
      "start": 110,
      "end": 119
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 134
                    },
                    "optional": false,
                    "computed": false,
                    "start": 128,
                    "end": 134
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 128,
                  "end": 136
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 138
                },
                "optional": false,
                "computed": false,
                "start": 128,
                "end": 138
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 146
              },
              "optional": false,
              "computed": false,
              "start": 128,
              "end": 146
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 128,
            "end": 148
          },
          "definite": false,
          "start": 124,
          "end": 148
        }
      ],
      "declare": false,
      "start": 120,
      "end": 149
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 159
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getCls",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 166
                    },
                    "optional": false,
                    "computed": false,
                    "start": 158,
                    "end": 166
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 158,
                  "end": 168
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 170
                },
                "optional": false,
                "computed": false,
                "start": 158,
                "end": 170
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 182
              },
              "optional": false,
              "computed": false,
              "start": 158,
              "end": 182
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 158,
            "end": 184
          },
          "definite": false,
          "start": 154,
          "end": 184
        }
      ],
      "declare": false,
      "start": 150,
      "end": 185
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 62,
  "end": 185
}
```
