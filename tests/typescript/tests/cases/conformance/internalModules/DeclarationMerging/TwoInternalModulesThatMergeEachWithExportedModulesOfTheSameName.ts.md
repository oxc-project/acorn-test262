__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 7,
          "end": 8
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 9,
          "end": 10
        },
        "start": 7,
        "end": 10
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      },
                      "start": 29,
                      "end": 37
                    },
                    "start": 28,
                    "end": 37
                  },
                  "init": null,
                  "definite": false,
                  "start": 28,
                  "end": 37
                }
              ],
              "declare": false,
              "start": 24,
              "end": 38
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17,
            "end": 38
          }
        ],
        "start": 11,
        "end": 40
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 90,
                              "end": 96
                            },
                            "start": 88,
                            "end": 96
                          },
                          "start": 87,
                          "end": 96
                        },
                        "init": null,
                        "definite": false,
                        "start": 87,
                        "end": 96
                      }
                    ],
                    "declare": false,
                    "start": 83,
                    "end": 97
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 76,
                  "end": 97
                }
              ],
              "start": 66,
              "end": 103
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 57,
            "end": 103
          }
        ],
        "start": 50,
        "end": 105
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 42,
      "end": 105
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 155,
                "end": 161
              },
              "start": 153,
              "end": 161
            },
            "start": 152,
            "end": 161
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 161
        }
      ],
      "declare": false,
      "start": 148,
      "end": 162
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 168
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 174
              },
              "optional": false,
              "computed": false,
              "start": 171,
              "end": 174
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "optional": false,
            "computed": false,
            "start": 171,
            "end": 176
          },
          "definite": false,
          "start": 167,
          "end": 176
        }
      ],
      "declare": false,
      "start": 163,
      "end": 177
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 187
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "start": 186,
          "end": 189
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 190,
          "end": 191
        },
        "start": 186,
        "end": 191
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
                "name": "Line",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 215
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
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 232
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 234,
                        "end": 240
                      },
                      "start": 232,
                      "end": 240
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
                    "start": 226,
                    "end": 241
                  }
                ],
                "start": 216,
                "end": 247
              },
              "abstract": false,
              "declare": false,
              "start": 205,
              "end": 247
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 198,
            "end": 247
          }
        ],
        "start": 192,
        "end": 249
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 179,
      "end": 249
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 259
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 281
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "TSModuleDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
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
                              "name": "Line",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 328,
                              "end": 332
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
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 351,
                                    "end": 355
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 357,
                                      "end": 363
                                    },
                                    "start": 355,
                                    "end": 363
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
                                  "start": 351,
                                  "end": 364
                                }
                              ],
                              "start": 333,
                              "end": 378
                            },
                            "abstract": false,
                            "declare": false,
                            "start": 322,
                            "end": 378
                          },
                          "specifiers": [],
                          "source": null,
                          "exportKind": "value",
                          "attributes": [],
                          "start": 315,
                          "end": 378
                        }
                      ],
                      "start": 301,
                      "end": 388
                    },
                    "kind": "module",
                    "declare": false,
                    "global": false,
                    "start": 292,
                    "end": 388
                  }
                ],
                "start": 282,
                "end": 394
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 273,
              "end": 394
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 266,
            "end": 394
          }
        ],
        "start": 260,
        "end": 396
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 251,
      "end": 396
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
            "name": "l",
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
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 452
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 454,
                        "end": 460
                      },
                      "start": 452,
                      "end": 460
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 446,
                    "end": 460
                  }
                ],
                "start": 444,
                "end": 462
              },
              "start": 442,
              "end": 462
            },
            "start": 441,
            "end": 462
          },
          "init": null,
          "definite": false,
          "start": 441,
          "end": 462
        }
      ],
      "declare": false,
      "start": 437,
      "end": 463
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
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 471,
                        "end": 472
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 473,
                        "end": 474
                      },
                      "start": 471,
                      "end": 474
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 475,
                      "end": 476
                    },
                    "start": 471,
                    "end": 476
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Line",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 481
                  },
                  "start": 471,
                  "end": 481
                },
                "typeArguments": null,
                "start": 471,
                "end": 481
              },
              "start": 469,
              "end": 481
            },
            "start": 468,
            "end": 481
          },
          "init": null,
          "definite": false,
          "start": 468,
          "end": 481
        }
      ],
      "declare": false,
      "start": 464,
      "end": 482
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 482
}
```
