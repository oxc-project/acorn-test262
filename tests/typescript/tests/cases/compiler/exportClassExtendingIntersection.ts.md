__ESTREE_TEST__:AST:
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
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 23
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 25
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 25
            }
          ],
          "start": 23,
          "end": 26
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 41
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 43,
                    "end": 46
                  },
                  "start": 43,
                  "end": 48
                },
                "start": 41,
                "end": 48
              },
              "value": null,
              "start": 34,
              "end": 48
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "typeArguments": null,
              "start": 53,
              "end": 54
            },
            "start": 50,
            "end": 54
          },
          "start": 29,
          "end": 54
        },
        "declare": false,
        "start": 7,
        "end": 55
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 55
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyBaseClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 81
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 83
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 82,
              "end": 83
            }
          ],
          "start": 81,
          "end": 84
        },
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
                "name": "baseProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 103
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                },
                "start": 103,
                "end": 111
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
              "start": 91,
              "end": 112
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 128
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 136,
                          "end": 137
                        },
                        "typeArguments": null,
                        "start": 136,
                        "end": 137
                      },
                      "start": 134,
                      "end": 137
                    },
                    "start": 129,
                    "end": 137
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 139,
                  "end": 141
                },
                "expression": false,
                "start": 128,
                "end": 141
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 117,
              "end": 141
            }
          ],
          "start": 85,
          "end": 143
        },
        "abstract": false,
        "declare": false,
        "start": 64,
        "end": 143
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 143
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 143
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 12,
    "end": 23,
    "range": [
      12,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 34,
    "end": 37,
    "range": [
      34,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 37,
    "end": 41,
    "range": [
      37,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 43,
    "end": 46,
    "range": [
      43,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 50,
    "end": 52,
    "range": [
      50,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63,
    "range": [
      57,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 64,
    "end": 69,
    "range": [
      64,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "MyBaseClass",
    "start": 70,
    "end": 81,
    "range": [
      70,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "baseProperty",
    "start": 91,
    "end": 103,
    "range": [
      91,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 105,
    "end": 111,
    "range": [
      105,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 117,
    "end": 128,
    "range": [
      117,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 129,
    "end": 134,
    "range": [
      129,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 33
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 33
          },
          "importKind": "value",
          "start": 22,
          "end": 33
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./BaseClass",
        "raw": "'./BaseClass'",
        "start": 41,
        "end": 54
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 55
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 81
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
                "name": "mixinProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 101
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 103,
                  "end": 109
                },
                "start": 101,
                "end": 109
              },
              "accessibility": null,
              "static": false,
              "start": 88,
              "end": 110
            }
          ],
          "start": 82,
          "end": 112
        },
        "declare": false,
        "start": 64,
        "end": 112
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 57,
      "end": 112
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 137
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 139
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 159
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyBaseClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 171
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 172,
                            "end": 175
                          }
                        ],
                        "start": 171,
                        "end": 176
                      },
                      "start": 160,
                      "end": 176
                    }
                  ],
                  "start": 159,
                  "end": 177
                },
                "start": 148,
                "end": 177
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 138,
              "end": 177
            }
          ],
          "start": 137,
          "end": 178
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 186
                },
                "typeArguments": null,
                "start": 185,
                "end": 186
              },
              "start": 183,
              "end": 186
            },
            "start": 179,
            "end": 186
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "typeArguments": null,
                "start": 189,
                "end": 190
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 204
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyMixin",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 205,
                      "end": 212
                    }
                  ],
                  "start": 204,
                  "end": 213
                },
                "start": 193,
                "end": 213
              }
            ],
            "start": 189,
            "end": 213
          },
          "start": 187,
          "end": 213
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 245
                },
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
                        "name": "mixinProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 269
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 271,
                          "end": 277
                        },
                        "start": 269,
                        "end": 277
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
                      "start": 256,
                      "end": 278
                    }
                  ],
                  "start": 246,
                  "end": 284
                },
                "abstract": false,
                "declare": false,
                "start": 227,
                "end": 284
              },
              "start": 220,
              "end": 284
            }
          ],
          "start": 214,
          "end": 286
        },
        "expression": false,
        "start": 121,
        "end": 286
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 114,
      "end": 286
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 286
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 9,
    "end": 20,
    "range": [
      9,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "MyBaseClass",
    "start": 22,
    "end": 33,
    "range": [
      22,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 36,
    "end": 40,
    "range": [
      36,
      40
    ]
  },
  {
    "type": "String",
    "value": "'./BaseClass'",
    "start": 41,
    "end": 54,
    "range": [
      41,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63,
    "range": [
      57,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 64,
    "end": 73,
    "range": [
      64,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMixin",
    "start": 74,
    "end": 81,
    "range": [
      74,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "mixinProperty",
    "start": 88,
    "end": 101,
    "range": [
      88,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 114,
    "end": 120,
    "range": [
      114,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 121,
    "end": 129,
    "range": [
      121,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMixin",
    "start": 130,
    "end": 137,
    "range": [
      130,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 140,
    "end": 147,
    "range": [
      140,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 148,
    "end": 159,
    "range": [
      148,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "MyBaseClass",
    "start": 160,
    "end": 171,
    "range": [
      160,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 172,
    "end": 175,
    "range": [
      172,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 179,
    "end": 183,
    "range": [
      179,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 193,
    "end": 204,
    "range": [
      193,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMixin",
    "start": 205,
    "end": 212,
    "range": [
      205,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 220,
    "end": 226,
    "range": [
      220,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 227,
    "end": 232,
    "range": [
      227,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 233,
    "end": 240,
    "range": [
      233,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "base",
    "start": 241,
    "end": 245,
    "range": [
      241,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "mixinProperty",
    "start": 256,
    "end": 269,
    "range": [
      256,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 271,
    "end": 277,
    "range": [
      271,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyBaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./BaseClass",
        "raw": "'./BaseClass'",
        "start": 28,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 42
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 59
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 59
          },
          "importKind": "value",
          "start": 52,
          "end": 59
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./MixinClass",
        "raw": "'./MixinClass'",
        "start": 67,
        "end": 81
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 43,
      "end": 82
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyExtendedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 112
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 128
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "MyBaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 140
            }
          ],
          "optional": false,
          "start": 121,
          "end": 141
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 142,
              "end": 148
            }
          ],
          "start": 141,
          "end": 149
        },
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
                "name": "extendedClassProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 177
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 179,
                  "end": 185
                },
                "start": 177,
                "end": 185
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
              "start": 156,
              "end": 186
            }
          ],
          "start": 150,
          "end": 188
        },
        "abstract": false,
        "declare": false,
        "start": 91,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 84,
      "end": 188
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 188
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "MyBaseClass",
    "start": 9,
    "end": 20,
    "range": [
      9,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27,
    "range": [
      23,
      27
    ]
  },
  {
    "type": "String",
    "value": "'./BaseClass'",
    "start": 28,
    "end": 41,
    "range": [
      28,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMixin",
    "start": 52,
    "end": 59,
    "range": [
      52,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 62,
    "end": 66,
    "range": [
      62,
      66
    ]
  },
  {
    "type": "String",
    "value": "'./MixinClass'",
    "start": 67,
    "end": 81,
    "range": [
      67,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 84,
    "end": 90,
    "range": [
      84,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 91,
    "end": 96,
    "range": [
      91,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "MyExtendedClass",
    "start": 97,
    "end": 112,
    "range": [
      97,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 113,
    "end": 120,
    "range": [
      113,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMixin",
    "start": 121,
    "end": 128,
    "range": [
      121,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "MyBaseClass",
    "start": 129,
    "end": 140,
    "range": [
      129,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 142,
    "end": 148,
    "range": [
      142,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "extendedClassProperty",
    "start": 156,
    "end": 177,
    "range": [
      156,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
            "name": "MyExtendedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 24
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyExtendedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 24
          },
          "importKind": "value",
          "start": 9,
          "end": 24
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./FinalClass",
        "raw": "'./FinalClass'",
        "start": 32,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 47
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 64
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 64
          },
          "importKind": "value",
          "start": 57,
          "end": 64
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./MixinClass",
        "raw": "'./MixinClass'",
        "start": 72,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 48,
      "end": 87
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
            "name": "myExtendedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 110
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyExtendedClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 132
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 133,
                "end": 141
              }
            ],
            "start": 113,
            "end": 142
          },
          "definite": false,
          "start": 95,
          "end": 142
        }
      ],
      "declare": false,
      "start": 89,
      "end": 143
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
            "name": "AnotherMixedClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 168
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 178
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "MyExtendedClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 194
              }
            ],
            "optional": false,
            "start": 171,
            "end": 195
          },
          "definite": false,
          "start": 151,
          "end": 195
        }
      ],
      "declare": false,
      "start": 145,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 196
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "MyExtendedClass",
    "start": 9,
    "end": 24,
    "range": [
      9,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 27,
    "end": 31,
    "range": [
      27,
      31
    ]
  },
  {
    "type": "String",
    "value": "'./FinalClass'",
    "start": 32,
    "end": 46,
    "range": [
      32,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMixin",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 67,
    "end": 71,
    "range": [
      67,
      71
    ]
  },
  {
    "type": "String",
    "value": "'./MixinClass'",
    "start": 72,
    "end": 86,
    "range": [
      72,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 89,
    "end": 94,
    "range": [
      89,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "myExtendedClass",
    "start": 95,
    "end": 110,
    "range": [
      95,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "MyExtendedClass",
    "start": 117,
    "end": 132,
    "range": [
      117,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 133,
    "end": 141,
    "range": [
      133,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 145,
    "end": 150,
    "range": [
      145,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "AnotherMixedClass",
    "start": 151,
    "end": 168,
    "range": [
      151,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMixin",
    "start": 171,
    "end": 178,
    "range": [
      171,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "MyExtendedClass",
    "start": 179,
    "end": 194,
    "range": [
      179,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  }
]
```
