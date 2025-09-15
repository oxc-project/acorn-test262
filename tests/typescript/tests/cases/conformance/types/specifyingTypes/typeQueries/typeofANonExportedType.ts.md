__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
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
              "name": "r1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 34
                  },
                  "typeArguments": null,
                  "start": 26,
                  "end": 34
                },
                "start": 24,
                "end": 34
              },
              "start": 22,
              "end": 34
            },
            "init": null,
            "definite": false,
            "start": 22,
            "end": 34
          }
        ],
        "declare": false,
        "start": 18,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 11,
      "end": 35
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 49
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 51,
                  "end": 53
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 46,
                "end": 53
              }
            ],
            "start": 44,
            "end": 55
          },
          "definite": false,
          "start": 40,
          "end": 55
        }
      ],
      "declare": false,
      "start": 36,
      "end": 56
    },
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
              "name": "r2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 80
                  },
                  "typeArguments": null,
                  "start": 72,
                  "end": 80
                },
                "start": 70,
                "end": 80
              },
              "start": 68,
              "end": 80
            },
            "init": null,
            "definite": false,
            "start": 68,
            "end": 80
          }
        ],
        "declare": false,
        "start": 64,
        "end": 81
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 81
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 89
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 101,
                "end": 107
              },
              "start": 99,
              "end": 107
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
            "start": 96,
            "end": 108
          }
        ],
        "start": 90,
        "end": 110
      },
      "abstract": false,
      "declare": false,
      "start": 82,
      "end": 110
    },
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
              "name": "c",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 126
                  },
                  "typeArguments": null,
                  "start": 125,
                  "end": 126
                },
                "start": 123,
                "end": 126
              },
              "start": 122,
              "end": 126
            },
            "init": null,
            "definite": false,
            "start": 122,
            "end": 126
          }
        ],
        "declare": false,
        "start": 118,
        "end": 127
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 111,
      "end": 127
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "typeArguments": null,
                "start": 136,
                "end": 137
              },
              "start": 134,
              "end": 137
            },
            "start": 132,
            "end": 137
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 137
        }
      ],
      "declare": false,
      "start": 128,
      "end": 138
    },
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
              "name": "r3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 163
                  },
                  "typeArguments": null,
                  "start": 155,
                  "end": 163
                },
                "start": 153,
                "end": 163
              },
              "start": 151,
              "end": 163
            },
            "init": null,
            "definite": false,
            "start": 151,
            "end": 163
          }
        ],
        "declare": false,
        "start": 147,
        "end": 164
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 140,
      "end": 164
    },
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
              "name": "r4",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 188
                  },
                  "typeArguments": null,
                  "start": 180,
                  "end": 188
                },
                "start": 178,
                "end": 188
              },
              "start": 176,
              "end": 188
            },
            "init": null,
            "definite": false,
            "start": 176,
            "end": 188
          }
        ],
        "declare": false,
        "start": 172,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 165,
      "end": 189
    },
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
              "name": "r4b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 213,
                    "end": 215
                  },
                  "typeArguments": null,
                  "start": 206,
                  "end": 215
                },
                "start": 204,
                "end": 215
              },
              "start": 201,
              "end": 215
            },
            "init": null,
            "definite": false,
            "start": 201,
            "end": 215
          }
        ],
        "declare": false,
        "start": 197,
        "end": 216
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 190,
      "end": 216
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 229
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 239
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 241,
                "end": 247
              },
              "start": 239,
              "end": 247
            },
            "accessibility": null,
            "static": false,
            "start": 236,
            "end": 248
          }
        ],
        "start": 230,
        "end": 250
      },
      "declare": false,
      "start": 218,
      "end": 250
    },
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
              "name": "i",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 265,
                    "end": 266
                  },
                  "typeArguments": null,
                  "start": 265,
                  "end": 266
                },
                "start": 263,
                "end": 266
              },
              "start": 262,
              "end": 266
            },
            "init": null,
            "definite": false,
            "start": 262,
            "end": 266
          }
        ],
        "declare": false,
        "start": 258,
        "end": 267
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 251,
      "end": 267
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 277
                },
                "typeArguments": null,
                "start": 276,
                "end": 277
              },
              "start": 274,
              "end": 277
            },
            "start": 272,
            "end": 277
          },
          "init": null,
          "definite": false,
          "start": 272,
          "end": 277
        }
      ],
      "declare": false,
      "start": 268,
      "end": 278
    },
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
              "name": "r5",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 302
                  },
                  "typeArguments": null,
                  "start": 294,
                  "end": 302
                },
                "start": 292,
                "end": 302
              },
              "start": 290,
              "end": 302
            },
            "init": null,
            "definite": false,
            "start": 290,
            "end": 302
          }
        ],
        "declare": false,
        "start": 286,
        "end": 303
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 279,
      "end": 303
    },
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
              "name": "r5",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 328
                  },
                  "typeArguments": null,
                  "start": 319,
                  "end": 328
                },
                "start": 317,
                "end": 328
              },
              "start": 315,
              "end": 328
            },
            "init": null,
            "definite": false,
            "start": 315,
            "end": 328
          }
        ],
        "declare": false,
        "start": 311,
        "end": 329
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 304,
      "end": 329
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 342
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 360,
                    "end": 363
                  },
                  "init": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 366,
                    "end": 368
                  },
                  "definite": false,
                  "start": 360,
                  "end": 368
                }
              ],
              "declare": false,
              "start": 356,
              "end": 369
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 349,
            "end": 369
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 388
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 399,
                      "end": 402
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 404,
                        "end": 410
                      },
                      "start": 402,
                      "end": 410
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
                    "start": 399,
                    "end": 411
                  }
                ],
                "start": 389,
                "end": 417
              },
              "abstract": false,
              "declare": false,
              "start": 381,
              "end": 417
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 374,
            "end": 417
          }
        ],
        "start": 343,
        "end": 419
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 331,
      "end": 419
    },
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
              "name": "r6",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 443
                  },
                  "typeArguments": null,
                  "start": 435,
                  "end": 443
                },
                "start": 433,
                "end": 443
              },
              "start": 431,
              "end": 443
            },
            "init": null,
            "definite": false,
            "start": 431,
            "end": 443
          }
        ],
        "declare": false,
        "start": 427,
        "end": 444
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 420,
      "end": 444
    },
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
              "name": "r7",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 468
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 472
                    },
                    "start": 467,
                    "end": 472
                  },
                  "typeArguments": null,
                  "start": 460,
                  "end": 472
                },
                "start": 458,
                "end": 472
              },
              "start": 456,
              "end": 472
            },
            "init": null,
            "definite": false,
            "start": 456,
            "end": 472
          }
        ],
        "declare": false,
        "start": 452,
        "end": 473
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 445,
      "end": 473
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 482,
        "end": 483
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 486,
        "end": 487
      },
      "importKind": "value",
      "start": 475,
      "end": 488
    },
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
              "name": "r8",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 512
                  },
                  "typeArguments": null,
                  "start": 504,
                  "end": 512
                },
                "start": 502,
                "end": 512
              },
              "start": 500,
              "end": 512
            },
            "init": null,
            "definite": false,
            "start": 500,
            "end": 512
          }
        ],
        "declare": false,
        "start": 496,
        "end": 513
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 489,
      "end": 513
    },
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
              "name": "r9",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 536,
                      "end": 537
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 541
                    },
                    "start": 536,
                    "end": 541
                  },
                  "typeArguments": null,
                  "start": 529,
                  "end": 541
                },
                "start": 527,
                "end": 541
              },
              "start": 525,
              "end": 541
            },
            "init": null,
            "definite": false,
            "start": 525,
            "end": 541
          }
        ],
        "declare": false,
        "start": 521,
        "end": 542
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 514,
      "end": 542
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 550
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 557,
              "end": 558
            },
            "initializer": null,
            "computed": false,
            "start": 557,
            "end": 558
          }
        ],
        "start": 551,
        "end": 560
      },
      "const": false,
      "declare": false,
      "start": 544,
      "end": 560
    },
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
              "name": "r10",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 584,
                    "end": 585
                  },
                  "typeArguments": null,
                  "start": 577,
                  "end": 585
                },
                "start": 575,
                "end": 585
              },
              "start": 572,
              "end": 585
            },
            "init": null,
            "definite": false,
            "start": 572,
            "end": 585
          }
        ],
        "declare": false,
        "start": 568,
        "end": 586
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 561,
      "end": 586
    },
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
              "name": "r11",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 611
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 612,
                      "end": 613
                    },
                    "start": 610,
                    "end": 613
                  },
                  "typeArguments": null,
                  "start": 603,
                  "end": 613
                },
                "start": 601,
                "end": 613
              },
              "start": 598,
              "end": 613
            },
            "init": null,
            "definite": false,
            "start": 598,
            "end": 613
          }
        ],
        "declare": false,
        "start": 594,
        "end": 614
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 587,
      "end": 614
    },
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
              "name": "r12",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 642
                  },
                  "typeArguments": null,
                  "start": 632,
                  "end": 642
                },
                "start": 630,
                "end": 642
              },
              "start": 627,
              "end": 642
            },
            "init": null,
            "definite": false,
            "start": 627,
            "end": 642
          }
        ],
        "declare": false,
        "start": 623,
        "end": 643
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 616,
      "end": 643
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 654,
        "end": 657
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 660,
        "end": 663
      },
      "expression": false,
      "start": 645,
      "end": 663
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 677
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 696
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 699,
                    "end": 700
                  },
                  "definite": false,
                  "start": 695,
                  "end": 700
                }
              ],
              "declare": false,
              "start": 691,
              "end": 701
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 684,
            "end": 701
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 720
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 731,
                      "end": 734
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 736,
                        "end": 742
                      },
                      "start": 734,
                      "end": 742
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
                    "start": 731,
                    "end": 743
                  }
                ],
                "start": 721,
                "end": 749
              },
              "abstract": false,
              "declare": false,
              "start": 713,
              "end": 749
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 706,
            "end": 749
          }
        ],
        "start": 678,
        "end": 751
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 664,
      "end": 751
    },
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
              "name": "r13",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 775,
                    "end": 778
                  },
                  "typeArguments": null,
                  "start": 768,
                  "end": 778
                },
                "start": 766,
                "end": 778
              },
              "start": 763,
              "end": 778
            },
            "init": null,
            "definite": false,
            "start": 763,
            "end": 778
          }
        ],
        "declare": false,
        "start": 759,
        "end": 779
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 752,
      "end": 779
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 779
}
```
