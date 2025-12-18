__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DetailedHTMLProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 64
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
                      "start": 65,
                      "end": 66
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 65,
                    "end": 66
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 69
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 68,
                    "end": 69
                  }
                ],
                "start": 64,
                "end": 70
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 71,
                "end": 73
              },
              "declare": false,
              "start": 37,
              "end": 73
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 30,
            "end": 73
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 109
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
                      "start": 110,
                      "end": 111
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 110,
                    "end": 111
                  }
                ],
                "start": 109,
                "end": 112
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 113,
                "end": 115
              },
              "declare": false,
              "start": 85,
              "end": 115
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 78,
            "end": 115
          }
        ],
        "start": 24,
        "end": 117
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 117
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 132
      },
      "start": 118,
      "end": 133
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 159
      },
      "start": 134,
      "end": 160
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 160
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17,
    "range": [
      8,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 18,
    "end": 23,
    "range": [
      18,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36,
    "range": [
      30,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 37,
    "end": 46,
    "range": [
      37,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "DetailedHTMLProps",
    "start": 47,
    "end": 64,
    "range": [
      47,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 85,
    "end": 94,
    "range": [
      85,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 95,
    "end": 109,
    "range": [
      95,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 127,
    "end": 132,
    "range": [
      127,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140,
    "range": [
      134,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 141,
    "end": 143,
    "range": [
      141,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 144,
    "end": 153,
    "range": [
      144,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 154,
    "end": 159,
    "range": [
      154,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
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
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 47,
        "end": 54
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTMLAttributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 96
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
                    "start": 97,
                    "end": 98
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 97,
                  "end": 98
                }
              ],
              "start": 96,
              "end": 99
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "css",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 113
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 116,
                      "end": 123
                    },
                    "start": 114,
                    "end": 123
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 110,
                  "end": 124
                }
              ],
              "start": 100,
              "end": 130
            },
            "declare": false,
            "start": 72,
            "end": 130
          }
        ],
        "start": 55,
        "end": 132
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 32,
      "end": 132
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledOtherComponentList",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 174
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
                "type": "Literal",
                "value": "div",
                "raw": "\"div\"",
                "start": 181,
                "end": 186
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
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 193
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DetailedHTMLProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 211
                    },
                    "start": 188,
                    "end": 211
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "React",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 217
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "HTMLAttributes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 232
                          },
                          "start": 212,
                          "end": 232
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "HTMLDivElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 233,
                                "end": 247
                              },
                              "typeArguments": null,
                              "start": 233,
                              "end": 247
                            }
                          ],
                          "start": 232,
                          "end": 248
                        },
                        "start": 212,
                        "end": 248
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HTMLDivElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 264
                        },
                        "typeArguments": null,
                        "start": 250,
                        "end": 264
                      }
                    ],
                    "start": 211,
                    "end": 265
                  },
                  "start": 188,
                  "end": 265
                },
                "start": 186,
                "end": 265
              },
              "accessibility": null,
              "static": false,
              "start": 181,
              "end": 265
            }
          ],
          "start": 175,
          "end": 267
        },
        "declare": false,
        "start": 140,
        "end": 267
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 133,
      "end": 267
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyledOtherComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 305
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 306,
              "end": 307
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 310
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 309,
              "end": 310
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 312,
              "end": 313
            }
          ],
          "start": 305,
          "end": 314
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 315,
          "end": 317
        },
        "declare": false,
        "start": 275,
        "end": 317
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 268,
      "end": 317
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 318
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 32,
    "end": 39,
    "range": [
      32,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 40,
    "end": 46,
    "range": [
      40,
      46
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 47,
    "end": 54,
    "range": [
      47,
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
    "type": "Keyword",
    "value": "interface",
    "start": 72,
    "end": 81,
    "range": [
      72,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 82,
    "end": 96,
    "range": [
      82,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "css",
    "start": 110,
    "end": 113,
    "range": [
      110,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 116,
    "end": 123,
    "range": [
      116,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 133,
    "end": 139,
    "range": [
      133,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 140,
    "end": 149,
    "range": [
      140,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "StyledOtherComponentList",
    "start": 150,
    "end": 174,
    "range": [
      150,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 181,
    "end": 186,
    "range": [
      181,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "DetailedHTMLProps",
    "start": 194,
    "end": 211,
    "range": [
      194,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 212,
    "end": 217,
    "range": [
      212,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLAttributes",
    "start": 218,
    "end": 232,
    "range": [
      218,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLDivElement",
    "start": 233,
    "end": 247,
    "range": [
      233,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLDivElement",
    "start": 250,
    "end": 264,
    "range": [
      250,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 268,
    "end": 274,
    "range": [
      268,
      274
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 275,
    "end": 284,
    "range": [
      275,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "StyledOtherComponent",
    "start": 285,
    "end": 305,
    "range": [
      285,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
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
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./types/react",
        "raw": "\"./types/react\"",
        "start": 14,
        "end": 29
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 30
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 31
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
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13,
    "range": [
      9,
      13
    ]
  },
  {
    "type": "String",
    "value": "\"./types/react\"",
    "start": 14,
    "end": 29,
    "range": [
      14,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
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
            "name": "StyledOtherComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledOtherComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 28
          },
          "importKind": "value",
          "start": 8,
          "end": 28
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledOtherComponentList",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 54
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StyledOtherComponentList",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 54
          },
          "importKind": "value",
          "start": 30,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "create-emotion-styled",
        "raw": "\"create-emotion-styled\"",
        "start": 61,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 85
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "styled",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 116
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 122,
                "end": 128
              },
              "start": 120,
              "end": 128
            },
            "start": 117,
            "end": 128
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 135,
                    "end": 141
                  },
                  "start": 133,
                  "end": 141
                },
                "start": 132,
                "end": 141
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledOtherComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 166
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 167,
                      "end": 169
                    },
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StyledOtherComponentList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 195
                        },
                        "typeArguments": null,
                        "start": 171,
                        "end": 195
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "div",
                          "raw": "\"div\"",
                          "start": 196,
                          "end": 201
                        },
                        "start": 196,
                        "end": 201
                      },
                      "start": 171,
                      "end": 202
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 204,
                      "end": 207
                    }
                  ],
                  "start": 166,
                  "end": 208
                },
                "start": 146,
                "end": 208
              },
              "start": 143,
              "end": 208
            },
            "start": 131,
            "end": 208
          },
          "start": 129,
          "end": 208
        },
        "body": null,
        "expression": false,
        "start": 101,
        "end": 209
      },
      "exportKind": "value",
      "start": 86,
      "end": 209
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 210
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
    "value": "StyledOtherComponent",
    "start": 8,
    "end": 28,
    "range": [
      8,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "StyledOtherComponentList",
    "start": 30,
    "end": 54,
    "range": [
      30,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 56,
    "end": 60,
    "range": [
      56,
      60
    ]
  },
  {
    "type": "String",
    "value": "\"create-emotion-styled\"",
    "start": 61,
    "end": 84,
    "range": [
      61,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 86,
    "end": 92,
    "range": [
      86,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 93,
    "end": 100,
    "range": [
      93,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 101,
    "end": 109,
    "range": [
      101,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "styled",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 117,
    "end": 120,
    "range": [
      117,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 122,
    "end": 128,
    "range": [
      122,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 135,
    "end": 141,
    "range": [
      135,
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
    "value": "=>",
    "start": 143,
    "end": 145,
    "range": [
      143,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "StyledOtherComponent",
    "start": 146,
    "end": 166,
    "range": [
      146,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "StyledOtherComponentList",
    "start": 171,
    "end": 195,
    "range": [
      171,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 196,
    "end": 201,
    "range": [
      196,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 204,
    "end": 207,
    "range": [
      204,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "styled",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react-emotion",
        "raw": "\"react-emotion\"",
        "start": 19,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
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
            "name": "Form",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "styled",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 55
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "div",
                  "raw": "'div'",
                  "start": 56,
                  "end": 61
                }
              ],
              "optional": false,
              "start": 49,
              "end": 62
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "color",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 70
                    },
                    "value": {
                      "type": "Literal",
                      "value": "red",
                      "raw": "\"red\"",
                      "start": 72,
                      "end": 77
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 65,
                    "end": 77
                  }
                ],
                "start": 63,
                "end": 79
              }
            ],
            "optional": false,
            "start": 49,
            "end": 80
          },
          "definite": false,
          "start": 42,
          "end": 80
        }
      ],
      "declare": false,
      "start": 36,
      "end": 80
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Form",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 101
      },
      "exportKind": "value",
      "start": 82,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
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
    "type": "Identifier",
    "value": "styled",
    "start": 7,
    "end": 13,
    "range": [
      7,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18,
    "range": [
      14,
      18
    ]
  },
  {
    "type": "String",
    "value": "\"react-emotion\"",
    "start": 19,
    "end": 34,
    "range": [
      19,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 36,
    "end": 41,
    "range": [
      36,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "Form",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "styled",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "String",
    "value": "'div'",
    "start": 56,
    "end": 61,
    "range": [
      56,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 65,
    "end": 70,
    "range": [
      65,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "String",
    "value": "\"red\"",
    "start": 72,
    "end": 77,
    "range": [
      72,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 89,
    "end": 96,
    "range": [
      89,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "Form",
    "start": 97,
    "end": 101,
    "range": [
      97,
      101
    ]
  }
]
```
