__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 11,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 43,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 73,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 104,
        "end": 200,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 110,
            "end": 198,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 111,
                "end": 191,
                "properties": [
                  {
                    "type": "Property",
                    "start": 112,
                    "end": 123,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 123,
                      "name": "descendants",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 123,
                      "name": "descendants",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 125,
                    "end": 129,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 129,
                      "name": "read",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 129,
                      "name": "read",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 131,
                  "end": 191,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 133,
                    "end": 191,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 143,
                        "end": 165,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 154,
                          "name": "descendants",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 155,
                          "end": 164,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 157,
                            "end": 164
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 174,
                        "end": 185,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 178,
                          "name": "read",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 179,
                          "end": 184,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 181,
                            "end": 184
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 197,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 194,
                "end": 197
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 218,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 231,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 232,
        "end": 261,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 238,
            "end": 248,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 247,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 241,
                "end": 247
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 249,
            "end": 259,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 250,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 258,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 252,
                "end": 258
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
      "type": "ExportNamedDeclaration",
      "start": 262,
      "end": 291,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 269,
        "end": 291,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 273,
            "end": 290,
            "id": {
              "type": "ObjectPattern",
              "start": 273,
              "end": 290,
              "properties": [
                {
                  "type": "Property",
                  "start": 275,
                  "end": 276,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 276,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 276,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 278,
                  "end": 282,
                  "argument": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 282,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 285,
                "end": 290,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 287,
                  "end": 290,
                  "typeName": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 290,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
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
  "end": 292,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 31,
        "end": 291,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 46,
            "end": 57,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 54,
              "end": 57,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 59,
            "end": 80,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 77,
              "end": 80,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 101,
            "end": 196,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 113,
              "end": 196,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 117,
                  "end": 193,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 118,
                      "end": 186,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 119,
                          "end": 130,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 119,
                            "end": 130,
                            "name": "descendants",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 119,
                            "end": 130,
                            "name": "descendants",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 132,
                          "end": 136,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 136,
                            "name": "read",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 132,
                            "end": 136,
                            "name": "read",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 138,
                        "end": 186,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 140,
                          "end": 186,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 145,
                              "end": 167,
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 156,
                                "name": "descendants",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 157,
                                "end": 166,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 159,
                                  "end": 166
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 171,
                              "end": 182,
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 171,
                                "end": 175,
                                "name": "read",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 176,
                                "end": 181,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 178,
                                  "end": 181
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 187,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 189,
                      "end": 192
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 216,
            "end": 258,
            "id": {
              "type": "Identifier",
              "start": 226,
              "end": 229,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 230,
              "end": 258,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 234,
                  "end": 244,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 243,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 237,
                      "end": 243
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 245,
                  "end": 255,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 246,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 246,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 248,
                      "end": 254
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
            "type": "ExportNamedDeclaration",
            "start": 260,
            "end": 289,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 267,
              "end": 289,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 271,
                  "end": 288,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 271,
                    "end": 288,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 273,
                        "end": 274,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 274,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 274,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 276,
                        "end": 280,
                        "argument": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 283,
                      "end": 288,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 285,
                        "end": 288,
                        "typeName": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 288,
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
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
      "kind": "namespace",
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
  "end": 726,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 66,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "name": "__extends",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 34,
            "end": 45,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 45,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 45,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 47,
            "end": 58,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 58,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 58,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 59,
          "end": 65,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 61,
            "end": 65
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 132,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 74,
        "end": 132,
        "id": {
          "type": "Identifier",
          "start": 91,
          "end": 99,
          "name": "__assign",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 100,
            "end": 106,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 106,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 103,
                "end": 106
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "RestElement",
            "start": 108,
            "end": 125,
            "argument": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "name": "sources",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 125,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 120,
                "end": 125,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 120,
                  "end": 123
                }
              }
            },
            "value": null
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 126,
          "end": 131,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 128,
            "end": 131
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 133,
      "end": 202,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 140,
        "end": 202,
        "id": {
          "type": "Identifier",
          "start": 157,
          "end": 163,
          "name": "__rest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 164,
            "end": 170,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 170,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 167,
                "end": 170
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 172,
            "end": 195,
            "name": "propertyNames",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 195,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 187,
                "end": 195,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 187,
                  "end": 193
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 196,
          "end": 201,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 198,
            "end": 201
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 203,
      "end": 315,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 210,
        "end": 315,
        "id": {
          "type": "Identifier",
          "start": 227,
          "end": 237,
          "name": "__decorate",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 238,
            "end": 260,
            "name": "decorators",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 260,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 250,
                "end": 260,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 250,
                  "end": 258,
                  "typeName": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 258,
                    "name": "Function",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 262,
            "end": 273,
            "name": "target",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 273,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 270,
                "end": 273
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 275,
            "end": 296,
            "name": "key",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 296,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 281,
                "end": 296,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 281,
                    "end": 287
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 290,
                    "end": 296
                  }
                ]
              }
            },
            "decorators": [],
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 298,
            "end": 308,
            "name": "desc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 308,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 305,
                "end": 308
              }
            },
            "decorators": [],
            "optional": true
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 309,
          "end": 314,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 311,
            "end": 314
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 316,
      "end": 399,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 323,
        "end": 399,
        "id": {
          "type": "Identifier",
          "start": 340,
          "end": 347,
          "name": "__param",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 348,
            "end": 366,
            "name": "paramIndex",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 366,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 360,
                "end": 366
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 368,
            "end": 387,
            "name": "decorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 387,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 387,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 387,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 388,
          "end": 398,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 390,
            "end": 398,
            "typeName": {
              "type": "Identifier",
              "start": 390,
              "end": 398,
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 400,
      "end": 483,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 407,
        "end": 483,
        "id": {
          "type": "Identifier",
          "start": 424,
          "end": 434,
          "name": "__metadata",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 435,
            "end": 451,
            "name": "metadataKey",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 451,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 448,
                "end": 451
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 453,
            "end": 471,
            "name": "metadataValue",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 466,
              "end": 471,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 468,
                "end": 471
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 472,
          "end": 482,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 474,
            "end": 482,
            "typeName": {
              "type": "Identifier",
              "start": 474,
              "end": 482,
              "name": "Function",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 484,
      "end": 588,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 491,
        "end": 588,
        "id": {
          "type": "Identifier",
          "start": 508,
          "end": 517,
          "name": "__awaiter",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 518,
            "end": 530,
            "name": "thisArg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 525,
              "end": 530,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 527,
                "end": 530
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 532,
            "end": 547,
            "name": "_arguments",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 542,
              "end": 547,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 544,
                "end": 547
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 549,
            "end": 560,
            "name": "P",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 550,
              "end": 560,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 552,
                "end": 560,
                "typeName": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 560,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 562,
            "end": 581,
            "name": "generator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 581,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 573,
                "end": 581,
                "typeName": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 581,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 582,
          "end": 587,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 584,
            "end": 587
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 589,
      "end": 660,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 596,
        "end": 660,
        "id": {
          "type": "Identifier",
          "start": 613,
          "end": 624,
          "name": "__generator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 625,
            "end": 637,
            "name": "thisArg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 632,
              "end": 637,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 634,
                "end": 637
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 639,
            "end": 653,
            "name": "body",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 643,
              "end": 653,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 645,
                "end": 653,
                "typeName": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 653,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 654,
          "end": 659,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 656,
            "end": 659
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 661,
      "end": 726,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 668,
        "end": 726,
        "id": {
          "type": "Identifier",
          "start": 685,
          "end": 697,
          "name": "__exportStar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 698,
            "end": 704,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 699,
              "end": 704,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 701,
                "end": 704
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 706,
            "end": 718,
            "name": "exports",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 713,
              "end": 718,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 715,
                "end": 718
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 719,
          "end": 725,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 721,
            "end": 725
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
