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
          "start": 10,
          "end": 11
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        },
        "start": 10,
        "end": 13
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
                        "start": 34,
                        "end": 40
                      },
                      "start": 32,
                      "end": 40
                    },
                    "start": 31,
                    "end": 40
                  },
                  "init": null,
                  "definite": false,
                  "start": 31,
                  "end": 40
                }
              ],
              "declare": false,
              "start": 27,
              "end": 41
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 20,
            "end": 41
          }
        ],
        "start": 14,
        "end": 43
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
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
              "start": 70,
              "end": 71
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
                              "start": 96,
                              "end": 102
                            },
                            "start": 94,
                            "end": 102
                          },
                          "start": 93,
                          "end": 102
                        },
                        "init": null,
                        "definite": false,
                        "start": 93,
                        "end": 102
                      }
                    ],
                    "declare": false,
                    "start": 89,
                    "end": 103
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 82,
                  "end": 103
                }
              ],
              "start": 72,
              "end": 109
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 60,
            "end": 109
          }
        ],
        "start": 53,
        "end": 111
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 45,
      "end": 111
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
                "start": 161,
                "end": 167
              },
              "start": 159,
              "end": 167
            },
            "start": 158,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 167
        }
      ],
      "declare": false,
      "start": 154,
      "end": 168
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
            "start": 173,
            "end": 174
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
                "start": 177,
                "end": 178
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 180
              },
              "optional": false,
              "computed": false,
              "start": 177,
              "end": 180
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "optional": false,
            "computed": false,
            "start": 177,
            "end": 182
          },
          "definite": false,
          "start": 173,
          "end": 182
        }
      ],
      "declare": false,
      "start": 169,
      "end": 183
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
            "start": 195,
            "end": 196
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 198
          },
          "start": 195,
          "end": 198
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 200
        },
        "start": 195,
        "end": 200
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
                "start": 220,
                "end": 224
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
                      "start": 235,
                      "end": 241
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 243,
                        "end": 249
                      },
                      "start": 241,
                      "end": 249
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
                    "start": 235,
                    "end": 250
                  }
                ],
                "start": 225,
                "end": 256
              },
              "abstract": false,
              "declare": false,
              "start": 214,
              "end": 256
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 207,
            "end": 256
          }
        ],
        "start": 201,
        "end": 258
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 185,
      "end": 258
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 271
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
                "start": 295,
                "end": 296
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
                      "start": 317,
                      "end": 318
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
                              "start": 346,
                              "end": 350
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
                                    "start": 369,
                                    "end": 373
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 375,
                                      "end": 381
                                    },
                                    "start": 373,
                                    "end": 381
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
                                  "start": 369,
                                  "end": 382
                                }
                              ],
                              "start": 351,
                              "end": 396
                            },
                            "abstract": false,
                            "declare": false,
                            "start": 340,
                            "end": 396
                          },
                          "specifiers": [],
                          "source": null,
                          "exportKind": "value",
                          "attributes": [],
                          "start": 333,
                          "end": 396
                        }
                      ],
                      "start": 319,
                      "end": 406
                    },
                    "kind": "namespace",
                    "declare": false,
                    "global": false,
                    "start": 307,
                    "end": 406
                  }
                ],
                "start": 297,
                "end": 412
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 285,
              "end": 412
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 278,
            "end": 412
          }
        ],
        "start": 272,
        "end": 414
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 260,
      "end": 414
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
                      "start": 464,
                      "end": 470
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 472,
                        "end": 478
                      },
                      "start": 470,
                      "end": 478
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 464,
                    "end": 478
                  }
                ],
                "start": 462,
                "end": 480
              },
              "start": 460,
              "end": 480
            },
            "start": 459,
            "end": 480
          },
          "init": null,
          "definite": false,
          "start": 459,
          "end": 480
        }
      ],
      "declare": false,
      "start": 455,
      "end": 481
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
                        "start": 489,
                        "end": 490
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 492
                      },
                      "start": 489,
                      "end": 492
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 493,
                      "end": 494
                    },
                    "start": 489,
                    "end": 494
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Line",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 495,
                    "end": 499
                  },
                  "start": 489,
                  "end": 499
                },
                "typeArguments": null,
                "start": 489,
                "end": 499
              },
              "start": 487,
              "end": 499
            },
            "start": 486,
            "end": 499
          },
          "init": null,
          "definite": false,
          "start": 486,
          "end": 499
        }
      ],
      "declare": false,
      "start": 482,
      "end": 500
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 500
}
```
