__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 438,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 262,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 61,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 22,
              "end": 61,
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 32,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 35,
                "end": 60,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 35,
                    "end": 41
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 44,
                    "end": 50
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 53,
                    "end": 60
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 66,
            "end": 86,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 73,
              "end": 86,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 77,
                  "end": 85,
                  "id": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 85,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 78,
                      "end": 85,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 80,
                        "end": 85,
                        "typeName": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 85,
                          "decorators": [],
                          "name": "Value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 92,
            "end": 114,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 99,
              "end": 114,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 107,
                "end": 114,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 120,
            "end": 138,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 127,
              "end": 138,
              "id": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 137,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 144,
            "end": 202,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 151,
              "end": 202,
              "id": {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 160,
                "end": 202,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 170,
                    "end": 196,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 177,
                      "end": 196,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 185,
                        "end": 196,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 208,
            "end": 229,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 215,
              "end": 229,
              "id": {
                "type": "Identifier",
                "start": 220,
                "end": 222,
                "decorators": [],
                "name": "MC",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 225,
                "end": 228,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 225,
                  "end": 228,
                  "left": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 228,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 235,
            "end": 260,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 242,
              "end": 260,
              "id": {
                "type": "Identifier",
                "start": 247,
                "end": 249,
                "decorators": [],
                "name": "fc",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 252,
                "end": 259,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 255,
                  "end": 259,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 258,
                    "end": 259,
                    "typeName": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 264,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 280,
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 281,
        "end": 302,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 287,
            "end": 300,
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 297,
              "decorators": [],
              "name": "someMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 304,
      "end": 438,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 312,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 313,
        "end": 438,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 319,
            "end": 351,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 326,
              "end": 351,
              "id": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "W",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 335,
                "end": 350,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 335,
                    "end": 341,
                    "typeName": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 341,
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 344,
                    "end": 350
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 356,
            "end": 436,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 363,
              "end": 436,
              "id": {
                "type": "Identifier",
                "start": 370,
                "end": 371,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 372,
                "end": 436,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 382,
                    "end": 405,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 389,
                      "end": 405,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 401,
                        "decorators": [],
                        "name": "Window",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 402,
                        "end": 405,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 414,
                    "end": 430,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 421,
                      "end": 430,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 425,
                          "end": 429,
                          "id": {
                            "type": "Identifier",
                            "start": 425,
                            "end": 429,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 426,
                              "end": 429,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 428,
                                "end": 429,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 428,
                                  "end": 429,
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
