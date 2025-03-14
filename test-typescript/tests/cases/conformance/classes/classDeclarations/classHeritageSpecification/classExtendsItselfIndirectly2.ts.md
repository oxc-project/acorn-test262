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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 34,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 16,
        "end": 19,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "N",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 18,
          "end": 19,
          "decorators": [],
          "name": "E",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 47,
      "end": 106,
      "body": {
        "type": "TSModuleBlock",
        "start": 56,
        "end": 106,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 62,
            "end": 103,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 69,
              "end": 103,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 87,
                "end": 103,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 89,
                    "end": 101,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 92,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "D",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 108,
      "end": 168,
      "body": {
        "type": "TSModuleBlock",
        "start": 117,
        "end": 168,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 123,
            "end": 166,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 130,
              "end": 166,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 150,
                "end": 166,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 152,
                    "end": 164,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 155,
                      "decorators": [],
                      "name": "baz",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "MemberExpression",
                "start": 146,
                "end": 149,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 170,
      "end": 387,
      "body": {
        "type": "TSModuleBlock",
        "start": 179,
        "end": 387,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 185,
            "end": 224,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 213,
              "end": 224,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 215,
                  "end": 222,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 218,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 191,
              "end": 193,
              "decorators": [],
              "name": "C2",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "MemberExpression",
              "start": 205,
              "end": 209,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "decorators": [],
                "name": "Q",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 207,
                "end": 209,
                "decorators": [],
                "name": "E2",
                "optional": false
              }
            },
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 193,
              "end": 196,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 194,
                  "end": 195,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 239,
            "end": 308,
            "body": {
              "type": "TSModuleBlock",
              "start": 248,
              "end": 308,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 258,
                  "end": 302,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 265,
                    "end": 302,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 291,
                      "end": 302,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 293,
                          "end": 300,
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "start": 293,
                            "end": 296,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
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
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "value": null
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 273,
                      "decorators": [],
                      "name": "D2",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 287,
                      "decorators": [],
                      "name": "C2",
                      "optional": false
                    },
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
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 273,
                      "end": 276,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 274,
                          "end": 275,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 274,
                            "end": 275,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 314,
            "end": 385,
            "body": {
              "type": "TSModuleBlock",
              "start": 323,
              "end": 385,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 333,
                  "end": 379,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 340,
                    "end": 379,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 368,
                      "end": 379,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 370,
                          "end": 377,
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "start": 370,
                            "end": 373,
                            "decorators": [],
                            "name": "baz",
                            "optional": false
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
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
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "value": null
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 348,
                      "decorators": [],
                      "name": "E2",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": {
                      "type": "MemberExpression",
                      "start": 360,
                      "end": 364,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 360,
                        "end": 361,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 362,
                        "end": 364,
                        "decorators": [],
                        "name": "D2",
                        "optional": false
                      }
                    },
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
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 348,
                      "end": 351,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 349,
                          "end": 350,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 349,
                            "end": 350,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "decorators": [],
              "name": "Q",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "decorators": [],
        "name": "O",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
