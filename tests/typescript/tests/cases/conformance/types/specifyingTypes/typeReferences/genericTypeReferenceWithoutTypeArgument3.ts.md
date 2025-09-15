__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 107
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 108,
            "end": 109
          }
        ],
        "start": 107,
        "end": 110
      },
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
              "start": 117,
              "end": 120
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "typeArguments": null,
                "start": 122,
                "end": 123
              },
              "start": 120,
              "end": 123
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
            "start": 117,
            "end": 124
          }
        ],
        "start": 111,
        "end": 126
      },
      "abstract": false,
      "declare": true,
      "start": 92,
      "end": 126
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
                  "start": 143,
                  "end": 144
                },
                "typeArguments": null,
                "start": 143,
                "end": 144
              },
              "start": 141,
              "end": 144
            },
            "start": 140,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 140,
          "end": 144
        }
      ],
      "declare": true,
      "start": 128,
      "end": 145
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 165
                    },
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
                          "start": 167,
                          "end": 168
                        },
                        "typeArguments": null,
                        "start": 167,
                        "end": 168
                      },
                      "start": 165,
                      "end": 168
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 164,
                    "end": 168
                  }
                ],
                "start": 162,
                "end": 170
              },
              "start": 160,
              "end": 170
            },
            "start": 159,
            "end": 170
          },
          "init": null,
          "definite": false,
          "start": 159,
          "end": 170
        }
      ],
      "declare": true,
      "start": 147,
      "end": 171
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
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
                              "start": 193,
                              "end": 194
                            },
                            "typeArguments": null,
                            "start": 193,
                            "end": 194
                          },
                          "start": 191,
                          "end": 194
                        },
                        "start": 190,
                        "end": 194
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 198
                        },
                        "typeArguments": null,
                        "start": 197,
                        "end": 198
                      },
                      "start": 195,
                      "end": 198
                    },
                    "start": 189,
                    "end": 198
                  }
                ],
                "start": 187,
                "end": 200
              },
              "start": 185,
              "end": 200
            },
            "start": 184,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 184,
          "end": 200
        }
      ],
      "declare": true,
      "start": 172,
      "end": 201
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
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
                              "start": 223,
                              "end": 224
                            },
                            "typeArguments": null,
                            "start": 223,
                            "end": 224
                          },
                          "start": 221,
                          "end": 224
                        },
                        "start": 220,
                        "end": 224
                      }
                    ],
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
                          "start": 227,
                          "end": 228
                        },
                        "typeArguments": null,
                        "start": 227,
                        "end": 228
                      },
                      "start": 225,
                      "end": 228
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 219,
                    "end": 228
                  }
                ],
                "start": 217,
                "end": 230
              },
              "start": 215,
              "end": 230
            },
            "start": 214,
            "end": 230
          },
          "init": null,
          "definite": false,
          "start": 214,
          "end": 230
        }
      ],
      "declare": true,
      "start": 202,
      "end": 231
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 251
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 255,
                "end": 256
              },
              "typeArguments": null,
              "start": 255,
              "end": 256
            },
            "start": 253,
            "end": 256
          },
          "start": 252,
          "end": 256
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "typeArguments": null,
          "start": 259,
          "end": 260
        },
        "start": 257,
        "end": 260
      },
      "body": null,
      "expression": false,
      "start": 233,
      "end": 261
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 278
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 288
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 289,
        "end": 291
      },
      "abstract": false,
      "declare": true,
      "start": 263,
      "end": 291
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 312
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 333
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 335
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 334,
                    "end": 335
                  }
                ],
                "start": 333,
                "end": 336
              },
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
                      "start": 339,
                      "end": 342
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 344,
                          "end": 345
                        },
                        "typeArguments": null,
                        "start": 344,
                        "end": 345
                      },
                      "start": 342,
                      "end": 345
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
                    "start": 339,
                    "end": 345
                  }
                ],
                "start": 337,
                "end": 347
              },
              "abstract": false,
              "declare": false,
              "start": 326,
              "end": 347
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 319,
            "end": 347
          }
        ],
        "start": 313,
        "end": 349
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 293,
      "end": 349
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 365,
        "end": 367
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 378,
          "end": 379
        },
        "optional": false,
        "computed": false,
        "start": 376,
        "end": 379
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 380,
        "end": 383
      },
      "abstract": false,
      "declare": true,
      "start": 351,
      "end": 383
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 400
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 402
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 412
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 414
                },
                "start": 411,
                "end": 414
              },
              "typeArguments": null,
              "start": 411,
              "end": 414
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 401,
            "end": 414
          }
        ],
        "start": 400,
        "end": 415
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 416,
        "end": 419
      },
      "abstract": false,
      "declare": true,
      "start": 384,
      "end": 419
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 438,
        "end": 439
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 441
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 451
              },
              "typeArguments": null,
              "start": 450,
              "end": 451
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 440,
            "end": 451
          }
        ],
        "start": 439,
        "end": 452
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 457
              },
              "typeArguments": null,
              "start": 456,
              "end": 457
            },
            "start": 454,
            "end": 457
          },
          "start": 453,
          "end": 457
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 421,
      "end": 459
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 478
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 480
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 492
                },
                "start": 489,
                "end": 492
              },
              "typeArguments": null,
              "start": 489,
              "end": 492
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 479,
            "end": 492
          }
        ],
        "start": 478,
        "end": 493
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 498
              },
              "typeArguments": null,
              "start": 497,
              "end": 498
            },
            "start": 495,
            "end": 498
          },
          "start": 494,
          "end": 498
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 460,
      "end": 500
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 500
}
```
