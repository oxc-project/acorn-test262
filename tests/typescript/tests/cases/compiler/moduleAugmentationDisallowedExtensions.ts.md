__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 15,
              "end": 16
            },
            "definite": false,
            "start": 11,
            "end": 16
          }
        ],
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
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 30,
                    "end": 31
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 34,
                    "end": 35
                  },
                  "definite": false,
                  "start": 30,
                  "end": 35
                }
              ],
              "declare": false,
              "start": 26,
              "end": 36
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 36
          }
        ],
        "start": 13,
        "end": 38
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 55,
        "end": 69
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 83,
                      "end": 89
                    },
                    "start": 81,
                    "end": 89
                  },
                  "start": 80,
                  "end": 89
                },
                "init": null,
                "definite": false,
                "start": 80,
                "end": 89
              }
            ],
            "declare": false,
            "start": 76,
            "end": 90
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 102,
                      "end": 108
                    },
                    "start": 100,
                    "end": 108
                  },
                  "start": 99,
                  "end": 108
                },
                "init": null,
                "definite": false,
                "start": 99,
                "end": 108
              }
            ],
            "declare": false,
            "start": 95,
            "end": 109
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 123,
                      "end": 129
                    },
                    "start": 121,
                    "end": 129
                  },
                  "start": 120,
                  "end": 129
                },
                "init": null,
                "definite": false,
                "start": 120,
                "end": 129
              }
            ],
            "declare": false,
            "start": 114,
            "end": 130
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 142
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 142
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 140,
                      "end": 142
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 146
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 146
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 144,
                      "end": 146
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 150
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 153,
                              "end": 154
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 153,
                              "end": 154
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 153,
                            "end": 154
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 152,
                        "end": 155
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 148,
                      "end": 155
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 159
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arr",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 162,
                              "end": 165
                            },
                            "value": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "el1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 168,
                                  "end": 171
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "el2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 173,
                                  "end": 176
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "el3",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 178,
                                  "end": 181
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 167,
                              "end": 182
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 162,
                            "end": 182
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 183
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 157,
                      "end": 183
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                            "name": "x1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 187,
                            "end": 189
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 191,
                              "end": 197
                            },
                            "start": 189,
                            "end": 197
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 187,
                          "end": 198
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 199,
                            "end": 201
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 203,
                              "end": 209
                            },
                            "start": 201,
                            "end": 209
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 199,
                          "end": 210
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 211,
                            "end": 213
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
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
                                    "name": "n",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 216,
                                    "end": 217
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 219,
                                      "end": 225
                                    },
                                    "start": 217,
                                    "end": 225
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 216,
                                  "end": 225
                                }
                              ],
                              "start": 215,
                              "end": 226
                            },
                            "start": 213,
                            "end": 226
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 211,
                          "end": 227
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 228,
                            "end": 230
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
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
                                    "name": "arr",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 233,
                                    "end": 236
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSNumberKeyword",
                                        "start": 238,
                                        "end": 244
                                      },
                                      "start": 238,
                                      "end": 246
                                    },
                                    "start": 236,
                                    "end": 246
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 233,
                                  "end": 246
                                }
                              ],
                              "start": 232,
                              "end": 247
                            },
                            "start": 230,
                            "end": 247
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 228,
                          "end": 247
                        }
                      ],
                      "start": 186,
                      "end": 249
                    },
                    "start": 184,
                    "end": 249
                  },
                  "start": 139,
                  "end": 249
                },
                "init": null,
                "definite": false,
                "start": 139,
                "end": 249
              }
            ],
            "declare": false,
            "start": 135,
            "end": 249
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 269
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 268,
                  "end": 269
                }
              ],
              "start": 266,
              "end": 271
            },
            "declare": false,
            "start": 254,
            "end": 271
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 287
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 312
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 313,
                      "end": 315
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 305,
                    "end": 315
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 298,
                  "end": 315
                }
              ],
              "start": 288,
              "end": 321
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 276,
            "end": 321
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 335
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 336,
              "end": 338
            },
            "abstract": false,
            "declare": false,
            "start": 326,
            "end": 338
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 355
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 359,
                "end": 365
              },
              "start": 357,
              "end": 365
            },
            "body": null,
            "expression": false,
            "start": 343,
            "end": 366
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 377
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 380,
              "end": 386
            },
            "declare": false,
            "start": 371,
            "end": 387
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportNamespaceSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "all",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 407
                },
                "start": 399,
                "end": 407
              }
            ],
            "source": {
              "type": "Literal",
              "value": "./x0",
              "raw": "\"./x0\"",
              "start": 413,
              "end": 419
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 392,
            "end": 420
          },
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 434
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 434
                },
                "importKind": "value",
                "start": 433,
                "end": 434
              }
            ],
            "source": {
              "type": "Literal",
              "value": "./x0",
              "raw": "\"./x0\"",
              "start": 441,
              "end": 447
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 425,
            "end": 448
          },
          {
            "type": "ExportAllDeclaration",
            "exported": null,
            "source": {
              "type": "Literal",
              "value": "./x0",
              "raw": "\"./x0\"",
              "start": 467,
              "end": 473
            },
            "attributes": [],
            "exportKind": "value",
            "start": 453,
            "end": 474
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 488
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 488
                },
                "exportKind": "value",
                "start": 487,
                "end": 488
              }
            ],
            "source": {
              "type": "Literal",
              "value": "./x0",
              "raw": "\"./x0\"",
              "start": 495,
              "end": 501
            },
            "exportKind": "value",
            "attributes": [],
            "start": 479,
            "end": 502
          }
        ],
        "start": 70,
        "end": 504
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 40,
      "end": 504
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./test",
        "raw": "\"./test\"",
        "start": 521,
        "end": 529
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "N1",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 547
            },
            "start": 536,
            "end": 548
          }
        ],
        "start": 530,
        "end": 550
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 506,
      "end": 550
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 551,
      "end": 560
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 561
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
          "name": "Observable",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 31
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
                "start": 32,
                "end": 33
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 32,
              "end": 33
            }
          ],
          "start": 31,
          "end": 34
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 47
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pred",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
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
                                  "start": 57,
                                  "end": 58
                                },
                                "typeArguments": null,
                                "start": 57,
                                "end": 58
                              },
                              "start": 56,
                              "end": 58
                            },
                            "start": 55,
                            "end": 58
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 63,
                            "end": 70
                          },
                          "start": 60,
                          "end": 70
                        },
                        "start": 54,
                        "end": 70
                      },
                      "start": 52,
                      "end": 70
                    },
                    "start": 48,
                    "end": 70
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 83
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 84,
                            "end": 85
                          },
                          "typeArguments": null,
                          "start": 84,
                          "end": 85
                        }
                      ],
                      "start": 83,
                      "end": 86
                    },
                    "start": 73,
                    "end": 86
                  },
                  "start": 71,
                  "end": 86
                },
                "body": null,
                "expression": false,
                "start": 47,
                "end": 87
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 41,
              "end": 87
            }
          ],
          "start": 35,
          "end": 89
        },
        "abstract": false,
        "declare": true,
        "start": 7,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 89
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 105,
              "end": 106
            },
            "definite": false,
            "start": 101,
            "end": 106
          }
        ],
        "declare": false,
        "start": 97,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 90,
      "end": 107
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
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
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 15,
              "end": 16
            },
            "definite": false,
            "start": 11,
            "end": 16
          }
        ],
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
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 27,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 41
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./x",
        "raw": "\"./x\"",
        "start": 49,
        "end": 54
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 42,
      "end": 55
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
}
```
