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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "List",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 55,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 24,
              "name": "data",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 53,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "name": "next",
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
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 74,
        "name": "DerivedList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 86,
        "end": 90,
        "name": "List",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 107,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
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
                  "name": "U",
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
              "name": "U",
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
              "name": "U",
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
      "type": "ClassDeclaration",
      "start": 138,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 150,
        "name": "MyList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 154,
        "end": 199,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 160,
            "end": 168,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 164,
              "name": "data",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 197,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 177,
              "name": "next",
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
                  "name": "MyList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "MyList",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 223,
            "name": "list",
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
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 225,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 248,
            "name": "list2",
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
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 250,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 276,
            "name": "myList",
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
                  "name": "MyList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 279,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "name": "xs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "list",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 295,
                "end": 301,
                "name": "myList",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 318,
            "name": "ys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "list",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 328,
                "end": 333,
                "name": "list2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 365,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 350,
            "name": "zs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "list",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 424,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 424,
            "name": "myDerivedList",
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
                  "name": "DerivedList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 426,
      "end": 457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 456,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 432,
            "name": "as",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "list",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 442,
                "end": 455,
                "name": "myDerivedList",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
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
