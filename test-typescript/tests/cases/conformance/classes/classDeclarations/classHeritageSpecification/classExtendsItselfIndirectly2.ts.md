__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 387,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 16,
        "end": 19,
        "object": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "N",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 18,
          "end": 19,
          "name": "E",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "name": "foo",
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
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
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
    {
      "type": "TSModuleDeclaration",
      "start": 47,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 56,
        "end": 106,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 62,
            "end": 103,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 69,
              "end": 103,
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 87,
                "end": 103,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 89,
                    "end": 101,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 92,
                      "name": "bar",
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
                      "start": 92,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 94,
                        "end": 100
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
      "start": 108,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 117,
        "end": 168,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 123,
            "end": 166,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 130,
              "end": 166,
              "id": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 146,
                "end": 149,
                "object": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 150,
                "end": 166,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 152,
                    "end": 164,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 155,
                      "name": "baz",
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
                      "start": 155,
                      "end": 163,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 157,
                        "end": 163
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
      "start": 170,
      "end": 387,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "name": "O",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 179,
        "end": 387,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 185,
            "end": 224,
            "id": {
              "type": "Identifier",
              "start": 191,
              "end": 193,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "MemberExpression",
              "start": 205,
              "end": 209,
              "object": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "name": "Q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 207,
                "end": 209,
                "name": "E2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 213,
              "end": 224,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 215,
                  "end": 222,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 218,
                    "name": "foo",
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
                    "start": 218,
                    "end": 221,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 220,
                      "end": 221,
                      "typeName": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 193,
              "end": 196,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 194,
                  "end": 195,
                  "name": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 209,
              "end": 212,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 210,
                  "end": 211,
                  "typeName": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 239,
            "end": 308,
            "id": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 248,
              "end": 308,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 258,
                  "end": 302,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 265,
                    "end": 302,
                    "id": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 273,
                      "name": "D2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 287,
                      "name": "C2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "ClassBody",
                      "start": 291,
                      "end": 302,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 293,
                          "end": 300,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 293,
                            "end": 296,
                            "name": "bar",
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
                            "start": 296,
                            "end": 299,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 298,
                              "end": 299,
                              "typeName": {
                                "type": "Identifier",
                                "start": 298,
                                "end": 299,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null
                        }
                      ]
                    },
                    "decorators": [],
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 273,
                      "end": 276,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 274,
                          "end": 275,
                          "name": {
                            "type": "Identifier",
                            "start": 274,
                            "end": 275,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 287,
                      "end": 290,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 288,
                          "end": 289,
                          "typeName": {
                            "type": "Identifier",
                            "start": 288,
                            "end": 289,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
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
            "start": 314,
            "end": 385,
            "id": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 323,
              "end": 385,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 333,
                  "end": 379,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 340,
                    "end": 379,
                    "id": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 348,
                      "name": "E2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": {
                      "type": "MemberExpression",
                      "start": 360,
                      "end": 364,
                      "object": {
                        "type": "Identifier",
                        "start": 360,
                        "end": 361,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 362,
                        "end": 364,
                        "name": "D2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "body": {
                      "type": "ClassBody",
                      "start": 368,
                      "end": 379,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 370,
                          "end": 377,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 370,
                            "end": 373,
                            "name": "baz",
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
                            "start": 373,
                            "end": 376,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 375,
                              "end": 376,
                              "typeName": {
                                "type": "Identifier",
                                "start": 375,
                                "end": 376,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null
                        }
                      ]
                    },
                    "decorators": [],
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 348,
                      "end": 351,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 349,
                          "end": 350,
                          "name": {
                            "type": "Identifier",
                            "start": 349,
                            "end": 350,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 364,
                      "end": 367,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 365,
                          "end": 366,
                          "typeName": {
                            "type": "Identifier",
                            "start": 365,
                            "end": 366,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
