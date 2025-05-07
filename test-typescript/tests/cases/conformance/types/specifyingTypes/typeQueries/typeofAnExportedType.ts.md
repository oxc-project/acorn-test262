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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 18,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 25,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 29,
            "end": 41,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 41,
              "decorators": [],
              "name": "r1",
              "optional": false,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 70,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 50,
        "end": 70,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 54,
            "end": 69,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 63,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 65,
                    "end": 67,
                    "raw": "''",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 95,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 78,
        "end": 95,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 82,
            "end": 94,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 94,
              "decorators": [],
              "name": "r2",
              "optional": false,
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
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 131,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 103,
        "end": 131,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 111,
          "end": 131,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 117,
              "end": 129,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 120,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 110,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 132,
      "end": 148,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 139,
        "end": 148,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 143,
            "end": 147,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 147,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 144,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 146,
                  "end": 147,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 147,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 158,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 158,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 185,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 168,
        "end": 185,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 172,
            "end": 184,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 172,
              "end": 184,
              "decorators": [],
              "name": "r3",
              "optional": false,
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
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 186,
      "end": 210,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 193,
        "end": 210,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 197,
            "end": 209,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 197,
              "end": 209,
              "decorators": [],
              "name": "r4",
              "optional": false,
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
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 211,
      "end": 237,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 218,
        "end": 237,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 222,
            "end": 236,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 222,
              "end": 236,
              "decorators": [],
              "name": "r4b",
              "optional": false,
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
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 239,
      "end": 278,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 246,
        "end": 278,
        "body": {
          "type": "TSInterfaceBody",
          "start": 258,
          "end": 278,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 264,
              "end": 276,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 264,
                "end": 267,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 267,
                "end": 275,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 269,
                  "end": 275
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 256,
          "end": 257,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 279,
      "end": 295,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 286,
        "end": 295,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 290,
            "end": 294,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 290,
              "end": 294,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 291,
                "end": 294,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 293,
                  "end": 294,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 305,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 305,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 307,
      "end": 331,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 314,
        "end": 331,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 318,
            "end": 330,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 318,
              "end": 330,
              "decorators": [],
              "name": "r5",
              "optional": false,
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
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 332,
      "end": 357,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 339,
        "end": 357,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 343,
            "end": 356,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 343,
              "end": 356,
              "decorators": [],
              "name": "r5",
              "optional": false,
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
                    "decorators": [],
                    "name": "i2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 359,
      "end": 451,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 366,
        "end": 451,
        "body": {
          "type": "TSModuleBlock",
          "start": 375,
          "end": 451,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 381,
              "end": 401,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 388,
                "end": 401,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 392,
                    "end": 400,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 392,
                      "end": 395,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 398,
                      "end": 400,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 406,
              "end": 449,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 413,
                "end": 449,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 421,
                  "end": 449,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 431,
                      "end": 443,
                      "accessibility": null,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 431,
                        "end": 434,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
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
                      "value": null
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 420,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
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
          "start": 373,
          "end": 374,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 452,
      "end": 476,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 459,
        "end": 476,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 463,
            "end": 475,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 463,
              "end": 475,
              "decorators": [],
              "name": "r6",
              "optional": false,
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
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 477,
      "end": 505,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 484,
        "end": 505,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 488,
            "end": 504,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 488,
              "end": 504,
              "decorators": [],
              "name": "r7",
              "optional": false,
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
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 501,
                      "end": 504,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 507,
      "end": 527,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 514,
        "end": 527,
        "id": {
          "type": "Identifier",
          "start": 521,
          "end": 522,
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value",
        "moduleReference": {
          "type": "Identifier",
          "start": 525,
          "end": 526,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 528,
      "end": 552,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 535,
        "end": 552,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 539,
            "end": 551,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 539,
              "end": 551,
              "decorators": [],
              "name": "r8",
              "optional": false,
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
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 553,
      "end": 581,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 560,
        "end": 581,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 564,
            "end": 580,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 564,
              "end": 580,
              "decorators": [],
              "name": "r9",
              "optional": false,
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
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 577,
                      "end": 580,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 583,
      "end": 606,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 590,
        "end": 606,
        "body": {
          "type": "TSEnumBody",
          "start": 597,
          "end": 606,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 603,
              "end": 604,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 603,
                "end": 604,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 595,
          "end": 596,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 607,
      "end": 632,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 614,
        "end": 632,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 618,
            "end": 631,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 618,
              "end": 631,
              "decorators": [],
              "name": "r10",
              "optional": false,
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
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 633,
      "end": 660,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 640,
        "end": 660,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 644,
            "end": 659,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 644,
              "end": 659,
              "decorators": [],
              "name": "r11",
              "optional": false,
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
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 659,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 662,
      "end": 689,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 669,
        "end": 689,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 673,
            "end": 688,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 673,
              "end": 688,
              "decorators": [],
              "name": "r12",
              "optional": false,
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
                    "decorators": [],
                    "name": "r12",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 691,
      "end": 716,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 698,
        "end": 716,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 713,
          "end": 716,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 707,
          "end": 710,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 717,
      "end": 808,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 724,
        "end": 808,
        "body": {
          "type": "TSModuleBlock",
          "start": 735,
          "end": 808,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 741,
              "end": 758,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 748,
                "end": 758,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 752,
                    "end": 757,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 752,
                      "end": 753,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 756,
                      "end": 757,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 763,
              "end": 806,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 770,
                "end": 806,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 778,
                  "end": 806,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 788,
                      "end": 800,
                      "accessibility": null,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 788,
                        "end": 791,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
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
                      "value": null
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 776,
                  "end": 777,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
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
          "start": 731,
          "end": 734,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 809,
      "end": 836,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 816,
        "end": 836,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 820,
            "end": 835,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 820,
              "end": 835,
              "decorators": [],
              "name": "r13",
              "optional": false,
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
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
