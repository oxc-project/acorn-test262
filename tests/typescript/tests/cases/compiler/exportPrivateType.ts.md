__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 28
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 40
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 42,
                      "end": 48
                    },
                    "start": 40,
                    "end": 48
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
                  "start": 39,
                  "end": 49
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 59
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 63
                      },
                      "typeArguments": null,
                      "start": 61,
                      "end": 63
                    },
                    "start": 59,
                    "end": 63
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
                  "start": 58,
                  "end": 64
                }
              ],
              "start": 29,
              "end": 70
            },
            "abstract": false,
            "declare": false,
            "start": 20,
            "end": 70
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 85
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 100
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 112,
                            "end": 116
                          },
                          "start": 105,
                          "end": 117
                        }
                      ],
                      "start": 103,
                      "end": 119
                    },
                    "expression": false,
                    "start": 100,
                    "end": 119
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 96,
                  "end": 119
                }
              ],
              "start": 86,
              "end": 125
            },
            "abstract": false,
            "declare": false,
            "start": 77,
            "end": 125
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 144
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 159,
                          "end": 165
                        },
                        "start": 157,
                        "end": 165
                      },
                      "start": 156,
                      "end": 165
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 170,
                          "end": 176
                        },
                        "start": 168,
                        "end": 176
                      },
                      "start": 167,
                      "end": 176
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 179,
                      "end": 185
                    },
                    "start": 177,
                    "end": 185
                  },
                  "start": 155,
                  "end": 186
                },
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
                          "type": "TSNumberKeyword",
                          "start": 199,
                          "end": 205
                        },
                        "start": 197,
                        "end": 205
                      },
                      "start": 196,
                      "end": 205
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 210,
                          "end": 216
                        },
                        "start": 208,
                        "end": 216
                      },
                      "start": 207,
                      "end": 216
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 221
                      },
                      "typeArguments": null,
                      "start": 219,
                      "end": 221
                    },
                    "start": 217,
                    "end": 221
                  },
                  "start": 195,
                  "end": 222
                }
              ],
              "start": 145,
              "end": 228
            },
            "declare": false,
            "start": 132,
            "end": 228
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 247
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 259
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 261,
                      "end": 267
                    },
                    "start": 259,
                    "end": 267
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 258,
                  "end": 268
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 278
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 280,
                      "end": 286
                    },
                    "start": 278,
                    "end": 286
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 277,
                  "end": 287
                }
              ],
              "start": 248,
              "end": 293
            },
            "declare": false,
            "start": 235,
            "end": 293
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
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 397
                        },
                        "typeArguments": null,
                        "start": 395,
                        "end": 397
                      },
                      "start": 393,
                      "end": 397
                    },
                    "start": 392,
                    "end": 397
                  },
                  "init": null,
                  "definite": false,
                  "start": 392,
                  "end": 397
                }
              ],
              "declare": false,
              "start": 388,
              "end": 398
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 381,
            "end": 398
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
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 417,
                          "end": 419
                        },
                        "typeArguments": null,
                        "start": 417,
                        "end": 419
                      },
                      "start": 415,
                      "end": 419
                    },
                    "start": 414,
                    "end": 419
                  },
                  "init": null,
                  "definite": false,
                  "start": 414,
                  "end": 419
                }
              ],
              "declare": false,
              "start": 410,
              "end": 420
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 403,
            "end": 420
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
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 439,
                          "end": 441
                        },
                        "typeArguments": null,
                        "start": 439,
                        "end": 441
                      },
                      "start": 437,
                      "end": 441
                    },
                    "start": 436,
                    "end": 441
                  },
                  "init": null,
                  "definite": false,
                  "start": 436,
                  "end": 441
                }
              ],
              "declare": false,
              "start": 432,
              "end": 442
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 425,
            "end": 442
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
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 461,
                          "end": 463
                        },
                        "typeArguments": null,
                        "start": 461,
                        "end": 463
                      },
                      "start": 459,
                      "end": 463
                    },
                    "start": 458,
                    "end": 463
                  },
                  "init": null,
                  "definite": false,
                  "start": 458,
                  "end": 463
                }
              ],
              "declare": false,
              "start": 454,
              "end": 464
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 447,
            "end": 464
          }
        ],
        "start": 14,
        "end": 466
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 466
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
            "start": 473,
            "end": 474
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 480
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 482
            },
            "optional": false,
            "computed": false,
            "start": 477,
            "end": 482
          },
          "definite": false,
          "start": 473,
          "end": 482
        }
      ],
      "declare": false,
      "start": 469,
      "end": 483
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 548
}
```
