__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 475,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 55,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 55,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 24,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 27,
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 52,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 43,
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 43,
                  "end": 52,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 44,
                      "end": 51,
                      "typeName": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 48,
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 48,
                        "end": 51,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 49,
                            "end": 50,
                            "typeName": {
                              "type": "Identifier",
                              "start": 49,
                              "end": 50,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 136,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 74,
        "decorators": [],
        "name": "DerivedList",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 77,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 76,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 86,
        "end": 90,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 90,
        "end": 93,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 91,
            "end": 92,
            "typeName": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 107,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 106,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 199,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 150,
        "decorators": [],
        "name": "MyList",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 150,
        "end": 153,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 151,
            "end": 152,
            "name": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 199,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 160,
            "end": 168,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 164,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 166,
                "end": 167,
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 197,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 177,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 185,
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 185,
                  "end": 196,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 186,
                      "end": 195,
                      "typeName": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 192,
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 192,
                        "end": 195,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 193,
                            "end": 194,
                            "typeName": {
                              "type": "Identifier",
                              "start": 193,
                              "end": 194,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 224,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 223,
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 211,
                "end": 223,
                "typeName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 215,
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 215,
                  "end": 223,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 216,
                      "end": 222
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 248,
            "decorators": [],
            "name": "list2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 248,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 248,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 240,
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 240,
                  "end": 248,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 241,
                      "end": 247
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 277,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 276,
            "decorators": [],
            "name": "myList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 276,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 268,
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 268,
                  "end": 276,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 269,
                      "end": 275
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 303,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 288,
            "end": 302,
            "elements": [
              {
                "type": "Identifier",
                "start": 289,
                "end": 293,
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 295,
                "end": 301,
                "decorators": [],
                "name": "myList",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 335,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 318,
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 321,
            "end": 334,
            "elements": [
              {
                "type": "Identifier",
                "start": 322,
                "end": 326,
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 328,
                "end": 333,
                "decorators": [],
                "name": "list2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 366,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 365,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 350,
            "decorators": [],
            "name": "zs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 353,
            "end": 365,
            "elements": [
              {
                "type": "Identifier",
                "start": 354,
                "end": 358,
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 360,
                "end": 364,
                "value": null,
                "raw": "null"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 425,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 424,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 424,
            "decorators": [],
            "name": "myDerivedList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 424,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 405,
                "end": 424,
                "typeName": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 416,
                  "decorators": [],
                  "name": "DerivedList",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 416,
                  "end": 424,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 417,
                      "end": 423
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 426,
      "end": 457,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 456,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 432,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 435,
            "end": 456,
            "elements": [
              {
                "type": "Identifier",
                "start": 436,
                "end": 440,
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 442,
                "end": 455,
                "decorators": [],
                "name": "myDerivedList",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
