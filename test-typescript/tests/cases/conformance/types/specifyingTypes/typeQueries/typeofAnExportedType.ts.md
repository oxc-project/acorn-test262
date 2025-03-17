__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 836,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "value": 1,
              "raw": "1"
            },
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 18,
      "end": 42,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 25,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 29,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 41,
              "name": "r1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 33,
                  "end": 41,
                  "exprName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "x",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 70,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 50,
        "end": 70,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 54,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 58,
              "end": 69,
              "properties": [
                {
                  "type": "Property",
                  "start": 60,
                  "end": 67,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 63,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 65,
                    "end": 67,
                    "value": "",
                    "raw": "''"
                  },
                  "kind": "init",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 95,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 78,
        "end": 95,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 82,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 94,
              "name": "r2",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 84,
                "end": 94,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 86,
                  "end": 94,
                  "exprName": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "name": "y",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 131,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 103,
        "end": 131,
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 110,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 111,
          "end": 131,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 117,
              "end": 129,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 120,
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
                "start": 120,
                "end": 128,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 122,
                  "end": 128
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 132,
      "end": 148,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 139,
        "end": 148,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 143,
            "end": 147,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 147,
              "name": "c",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 144,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 146,
                  "end": 147,
                  "typeName": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "name": "C",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 158,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 158,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 185,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 168,
        "end": 185,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 172,
            "end": 184,
            "id": {
              "type": "Identifier",
              "start": 172,
              "end": 184,
              "name": "r3",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 174,
                "end": 184,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 176,
                  "end": 184,
                  "exprName": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "name": "C",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 186,
      "end": 210,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 193,
        "end": 210,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 197,
            "end": 209,
            "id": {
              "type": "Identifier",
              "start": 197,
              "end": 209,
              "name": "r4",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 199,
                "end": 209,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 201,
                  "end": 209,
                  "exprName": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 209,
                    "name": "c",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 211,
      "end": 237,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 218,
        "end": 237,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 222,
            "end": 236,
            "id": {
              "type": "Identifier",
              "start": 222,
              "end": 236,
              "name": "r4b",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 225,
                "end": 236,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 227,
                  "end": 236,
                  "exprName": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 236,
                    "name": "c2",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 239,
      "end": 278,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 246,
        "end": 278,
        "id": {
          "type": "Identifier",
          "start": 256,
          "end": 257,
          "name": "I",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 258,
          "end": 278,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 264,
              "end": 276,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 264,
                "end": 267,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 267,
                "end": 275,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 269,
                  "end": 275
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 279,
      "end": 295,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 286,
        "end": 295,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 290,
            "end": 294,
            "id": {
              "type": "Identifier",
              "start": 290,
              "end": 294,
              "name": "i",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 291,
                "end": 294,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 293,
                  "end": 294,
                  "typeName": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "name": "I",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 305,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 305,
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "name": "I",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 307,
      "end": 331,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 314,
        "end": 331,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 318,
            "end": 330,
            "id": {
              "type": "Identifier",
              "start": 318,
              "end": 330,
              "name": "r5",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 320,
                "end": 330,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 322,
                  "end": 330,
                  "exprName": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 330,
                    "name": "i",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 332,
      "end": 357,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 339,
        "end": 357,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 343,
            "end": 356,
            "id": {
              "type": "Identifier",
              "start": 343,
              "end": 356,
              "name": "r5",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 345,
                "end": 356,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 347,
                  "end": 356,
                  "exprName": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 356,
                    "name": "i2",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 359,
      "end": 451,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 366,
        "end": 451,
        "id": {
          "type": "Identifier",
          "start": 373,
          "end": 374,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 375,
          "end": 451,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 381,
              "end": 401,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 388,
                "end": 401,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 392,
                    "end": 400,
                    "id": {
                      "type": "Identifier",
                      "start": 392,
                      "end": 395,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 398,
                      "end": 400,
                      "value": "",
                      "raw": "''"
                    },
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 406,
              "end": 449,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 413,
                "end": 449,
                "id": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 420,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 421,
                  "end": 449,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 431,
                      "end": 443,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 434,
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
                        "start": 434,
                        "end": 442,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 436,
                          "end": 442
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 452,
      "end": 476,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 459,
        "end": 476,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 463,
            "end": 475,
            "id": {
              "type": "Identifier",
              "start": 463,
              "end": 475,
              "name": "r6",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 465,
                "end": 475,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 467,
                  "end": 475,
                  "exprName": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 475,
                    "name": "M",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 477,
      "end": 505,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 484,
        "end": 505,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 488,
            "end": 504,
            "id": {
              "type": "Identifier",
              "start": 488,
              "end": 504,
              "name": "r7",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 490,
                "end": 504,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 492,
                  "end": 504,
                  "exprName": {
                    "type": "TSQualifiedName",
                    "start": 499,
                    "end": 504,
                    "left": {
                      "type": "Identifier",
                      "start": 499,
                      "end": 500,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 501,
                      "end": 504,
                      "name": "foo",
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 507,
      "end": 527,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 514,
        "end": 527,
        "id": {
          "type": "Identifier",
          "start": 521,
          "end": 522,
          "name": "Z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "Identifier",
          "start": 525,
          "end": 526,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 528,
      "end": 552,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 535,
        "end": 552,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 539,
            "end": 551,
            "id": {
              "type": "Identifier",
              "start": 539,
              "end": 551,
              "name": "r8",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 541,
                "end": 551,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 543,
                  "end": 551,
                  "exprName": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 551,
                    "name": "Z",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 553,
      "end": 581,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 560,
        "end": 581,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 564,
            "end": 580,
            "id": {
              "type": "Identifier",
              "start": 564,
              "end": 580,
              "name": "r9",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 566,
                "end": 580,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 568,
                  "end": 580,
                  "exprName": {
                    "type": "TSQualifiedName",
                    "start": 575,
                    "end": 580,
                    "left": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 576,
                      "name": "Z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 577,
                      "end": 580,
                      "name": "foo",
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 583,
      "end": 606,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 590,
        "end": 606,
        "id": {
          "type": "Identifier",
          "start": 595,
          "end": 596,
          "name": "E",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 603,
            "end": 604,
            "id": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 597,
          "end": 606,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 603,
              "end": 604,
              "id": {
                "type": "Identifier",
                "start": 603,
                "end": 604,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 607,
      "end": 632,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 614,
        "end": 632,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 618,
            "end": 631,
            "id": {
              "type": "Identifier",
              "start": 618,
              "end": 631,
              "name": "r10",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 621,
                "end": 631,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 623,
                  "end": 631,
                  "exprName": {
                    "type": "Identifier",
                    "start": 630,
                    "end": 631,
                    "name": "E",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 633,
      "end": 660,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 640,
        "end": 660,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 644,
            "end": 659,
            "id": {
              "type": "Identifier",
              "start": 644,
              "end": 659,
              "name": "r11",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 647,
                "end": 659,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 649,
                  "end": 659,
                  "exprName": {
                    "type": "TSQualifiedName",
                    "start": 656,
                    "end": 659,
                    "left": {
                      "type": "Identifier",
                      "start": 656,
                      "end": 657,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 659,
                      "name": "A",
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 662,
      "end": 689,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 669,
        "end": 689,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 673,
            "end": 688,
            "id": {
              "type": "Identifier",
              "start": 673,
              "end": 688,
              "name": "r12",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 676,
                "end": 688,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 678,
                  "end": 688,
                  "exprName": {
                    "type": "Identifier",
                    "start": 685,
                    "end": 688,
                    "name": "r12",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 691,
      "end": 716,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 698,
        "end": 716,
        "id": {
          "type": "Identifier",
          "start": 707,
          "end": 710,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 713,
          "end": 716,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 717,
      "end": 808,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 724,
        "end": 808,
        "id": {
          "type": "Identifier",
          "start": 731,
          "end": 734,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 735,
          "end": 808,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 741,
              "end": 758,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 748,
                "end": 758,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 752,
                    "end": 757,
                    "id": {
                      "type": "Identifier",
                      "start": 752,
                      "end": 753,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 756,
                      "end": 757,
                      "value": 1,
                      "raw": "1"
                    },
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 763,
              "end": 806,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 770,
                "end": 806,
                "id": {
                  "type": "Identifier",
                  "start": 776,
                  "end": 777,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 778,
                  "end": 806,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 788,
                      "end": 800,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 788,
                        "end": 791,
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
                        "start": 791,
                        "end": 799,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 793,
                          "end": 799
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 809,
      "end": 836,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 816,
        "end": 836,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 820,
            "end": 835,
            "id": {
              "type": "Identifier",
              "start": 820,
              "end": 835,
              "name": "r13",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 823,
                "end": 835,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 825,
                  "end": 835,
                  "exprName": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 835,
                    "name": "foo",
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
  "sourceType": "script",
  "hashbang": null
}
```
