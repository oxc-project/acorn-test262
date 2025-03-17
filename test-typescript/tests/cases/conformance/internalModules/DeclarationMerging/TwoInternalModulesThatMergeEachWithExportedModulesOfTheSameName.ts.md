__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 483,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 10,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 8,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 40,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 38,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 38,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 37,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 37,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 37,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 50,
        "end": 105,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 57,
            "end": 103,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 66,
              "end": 103,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 76,
                  "end": 97,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 83,
                    "end": 97,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 87,
                        "end": 96,
                        "id": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 96,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 88,
                            "end": 96,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 90,
                              "end": 96
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 161,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 161,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 155,
                "end": 161
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 176,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 176,
            "object": {
              "type": "MemberExpression",
              "start": 171,
              "end": 174,
              "object": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 179,
      "end": 249,
      "id": {
        "type": "TSQualifiedName",
        "start": 186,
        "end": 191,
        "left": {
          "type": "TSQualifiedName",
          "start": 186,
          "end": 189,
          "left": {
            "type": "Identifier",
            "start": 186,
            "end": 187,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "name": "Y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 190,
          "end": 191,
          "name": "Z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 192,
        "end": 249,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 198,
            "end": 247,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 205,
              "end": 247,
              "id": {
                "type": "Identifier",
                "start": 211,
                "end": 215,
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 216,
                "end": 247,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 226,
                    "end": 241,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 232,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 232,
                      "end": 240,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 234,
                        "end": 240
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 251,
      "end": 396,
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 259,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 260,
        "end": 396,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 266,
            "end": 394,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 273,
              "end": 394,
              "id": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 282,
                "end": 394,
                "body": [
                  {
                    "type": "TSModuleDeclaration",
                    "start": 292,
                    "end": 388,
                    "id": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "name": "Z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "TSModuleBlock",
                      "start": 301,
                      "end": 388,
                      "body": [
                        {
                          "type": "ExportNamedDeclaration",
                          "start": 315,
                          "end": 378,
                          "declaration": {
                            "type": "ClassDeclaration",
                            "start": 322,
                            "end": 378,
                            "id": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 332,
                              "name": "Line",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "superClass": null,
                            "body": {
                              "type": "ClassBody",
                              "start": 333,
                              "end": 378,
                              "body": [
                                {
                                  "type": "PropertyDefinition",
                                  "start": 351,
                                  "end": 364,
                                  "static": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 351,
                                    "end": 355,
                                    "name": "name",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": null,
                                  "decorators": [],
                                  "declare": false,
                                  "override": false,
                                  "optional": false,
                                  "definite": false,
                                  "readonly": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 355,
                                    "end": 363,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 357,
                                      "end": 363
                                    }
                                  },
                                  "accessibility": null
                                }
                              ]
                            },
                            "decorators": [],
                            "typeParameters": null,
                            "implements": [],
                            "abstract": false,
                            "declare": false,
                            "superTypeArguments": null
                          },
                          "specifiers": [],
                          "source": null,
                          "attributes": [],
                          "exportKind": "value"
                        }
                      ]
                    },
                    "kind": "module",
                    "declare": false,
                    "global": false
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 437,
      "end": 463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 462,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 462,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 442,
              "end": 462,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 444,
                "end": 462,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 446,
                    "end": 460,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 446,
                      "end": 452,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 452,
                      "end": 460,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 454,
                        "end": 460
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 482,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 481,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 481,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 481,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 471,
                "end": 481,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 471,
                  "end": 481,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 471,
                    "end": 476,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 471,
                      "end": 474,
                      "left": {
                        "type": "Identifier",
                        "start": 471,
                        "end": 472,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 474,
                        "name": "Y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 475,
                      "end": 476,
                      "name": "Z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 481,
                    "name": "Line",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
