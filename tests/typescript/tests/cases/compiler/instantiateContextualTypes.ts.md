__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 28
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 29,
              "end": 30
            }
          ],
          "start": 28,
          "end": 31
        },
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 43
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 46
                  },
                  "typeArguments": null,
                  "start": 45,
                  "end": 46
                },
                "start": 43,
                "end": 46
              },
              "accessibility": null,
              "static": false,
              "start": 38,
              "end": 47
            }
          ],
          "start": 32,
          "end": 49
        },
        "declare": false,
        "start": 17,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 10,
      "end": 49
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 63,
            "end": 64
          }
        ],
        "start": 62,
        "end": 65
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 75
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 77
                    },
                    "typeArguments": null,
                    "start": 76,
                    "end": 77
                  }
                ],
                "start": 75,
                "end": 78
              },
              "start": 74,
              "end": 78
            },
            "start": 72,
            "end": 78
          },
          "start": 66,
          "end": 78
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "typeArguments": null,
              "start": 87,
              "end": 88
            },
            "start": 85,
            "end": 88
          },
          "start": 80,
          "end": 88
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 92,
          "end": 96
        },
        "start": 90,
        "end": 96
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 97,
        "end": 100
      },
      "expression": false,
      "start": 51,
      "end": 100
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "handlers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 125
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 134,
                              "end": 140
                            },
                            "start": 132,
                            "end": 140
                          },
                          "start": 127,
                          "end": 140
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 145,
                          "end": 149
                        },
                        "start": 142,
                        "end": 149
                      },
                      "start": 126,
                      "end": 149
                    }
                  ],
                  "start": 125,
                  "end": 150
                },
                "start": 124,
                "end": 150
              },
              "start": 122,
              "end": 150
            },
            "start": 114,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 114,
          "end": 150
        }
      ],
      "declare": true,
      "start": 102,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 154
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "handlers",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 163
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 170
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "alert",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 179
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 185
                }
              ],
              "optional": false,
              "start": 174,
              "end": 186
            },
            "id": null,
            "generator": false,
            "start": 165,
            "end": 186
          }
        ],
        "optional": false,
        "start": 152,
        "end": 187
      },
      "directive": null,
      "start": 152,
      "end": 188
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 220
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
              "start": 221,
              "end": 222
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 221,
            "end": 222
          }
        ],
        "start": 220,
        "end": 223
      },
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
              "name": "initialValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 241
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
                  "start": 243,
                  "end": 244
                },
                "typeArguments": null,
                "start": 243,
                "end": 244
              },
              "start": 241,
              "end": 244
            },
            "accessibility": null,
            "static": false,
            "start": 228,
            "end": 245
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nextValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 258
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cur",
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
                          "start": 266,
                          "end": 267
                        },
                        "typeArguments": null,
                        "start": 266,
                        "end": 267
                      },
                      "start": 264,
                      "end": 267
                    },
                    "start": 261,
                    "end": 267
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 273
                    },
                    "typeArguments": null,
                    "start": 272,
                    "end": 273
                  },
                  "start": 269,
                  "end": 273
                },
                "start": 260,
                "end": 273
              },
              "start": 258,
              "end": 273
            },
            "accessibility": null,
            "static": false,
            "start": 248,
            "end": 274
          }
        ],
        "start": 224,
        "end": 276
      },
      "declare": false,
      "start": 201,
      "end": 276
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 300
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 302
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 301,
            "end": 302
          }
        ],
        "start": 300,
        "end": 303
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 317
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 326
                      },
                      "typeArguments": null,
                      "start": 325,
                      "end": 326
                    },
                    "start": 323,
                    "end": 326
                  },
                  "start": 318,
                  "end": 326
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 317,
              "end": 328
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 306,
            "end": 328
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 334
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 336,
                  "end": 337
                },
                "typeArguments": null,
                "start": 336,
                "end": 337
              },
              "start": 334,
              "end": 337
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
            "start": 329,
            "end": 338
          }
        ],
        "start": 304,
        "end": 340
      },
      "abstract": false,
      "declare": true,
      "start": 277,
      "end": 340
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 371
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 377
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 380,
              "end": 382
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 372,
            "end": 382
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Values",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 390
            },
            "constraint": null,
            "default": {
              "type": "TSObjectKeyword",
              "start": 393,
              "end": 399
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 384,
            "end": 399
          }
        ],
        "start": 371,
        "end": 400
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 422
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 428
                },
                "typeArguments": null,
                "start": 423,
                "end": 428
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 440
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 441,
                        "end": 447
                      },
                      "typeArguments": null,
                      "start": 441,
                      "end": 447
                    }
                  ],
                  "start": 440,
                  "end": 448
                },
                "start": 431,
                "end": 448
              }
            ],
            "start": 423,
            "end": 448
          }
        ],
        "start": 422,
        "end": 449
      },
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
              "name": "iv",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 456
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 464
                },
                "typeArguments": null,
                "start": 458,
                "end": 464
              },
              "start": 456,
              "end": 464
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
            "start": 454,
            "end": 465
          }
        ],
        "start": 450,
        "end": 467
      },
      "abstract": false,
      "declare": true,
      "start": 341,
      "end": 467
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "GenericComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 473,
          "end": 489
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 505
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 507,
                  "end": 509
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 492,
                "end": 509
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nextValues",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 521
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 523,
                      "end": 526
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 530,
                    "end": 532
                  },
                  "id": null,
                  "generator": false,
                  "start": 523,
                  "end": 532
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 511,
                "end": 532
              }
            ],
            "start": 490,
            "end": 534
          }
        ],
        "start": 469,
        "end": 535
      },
      "directive": null,
      "start": 469,
      "end": 536
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useStringOrNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 583
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
              "start": 584,
              "end": 585
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 594,
                  "end": 600
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 603,
                  "end": 609
                }
              ],
              "start": 594,
              "end": 609
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 584,
            "end": 609
          }
        ],
        "start": 583,
        "end": 610
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 614,
                "end": 615
              },
              "typeArguments": null,
              "start": 614,
              "end": 615
            },
            "start": 612,
            "end": 615
          },
          "start": 611,
          "end": 615
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "useIt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 625
                },
                "typeArguments": null,
                "start": 624,
                "end": 625
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 634,
                "end": 640
              },
              "trueType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 648,
                        "end": 654
                      },
                      "start": 646,
                      "end": 654
                    },
                    "start": 645,
                    "end": 654
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 659,
                    "end": 663
                  },
                  "start": 656,
                  "end": 663
                },
                "start": 644,
                "end": 663
              },
              "falseType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 672,
                        "end": 678
                      },
                      "start": 670,
                      "end": 678
                    },
                    "start": 669,
                    "end": 678
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 683,
                    "end": 687
                  },
                  "start": 680,
                  "end": 687
                },
                "start": 668,
                "end": 687
              },
              "start": 624,
              "end": 688
            },
            "start": 622,
            "end": 688
          },
          "start": 617,
          "end": 688
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 691,
          "end": 695
        },
        "start": 689,
        "end": 695
      },
      "body": null,
      "expression": false,
      "start": 549,
      "end": 696
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "useStringOrNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 697,
          "end": 714
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 715,
            "end": 717
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 722
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 726,
              "end": 728
            },
            "id": null,
            "generator": false,
            "start": 719,
            "end": 728
          }
        ],
        "optional": false,
        "start": 697,
        "end": 729
      },
      "directive": null,
      "start": 697,
      "end": 730
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 758
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 759,
              "end": 760
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 759,
            "end": 760
          }
        ],
        "start": 758,
        "end": 761
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 764,
            "end": 770
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "attachPayloadTypeHack",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 796
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 800
                        },
                        "typeArguments": null,
                        "start": 799,
                        "end": 800
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 803,
                        "end": 808
                      }
                    ],
                    "start": 799,
                    "end": 808
                  },
                  "start": 797,
                  "end": 808
                },
                "accessibility": null,
                "static": false,
                "start": 775,
                "end": 808
              }
            ],
            "start": 773,
            "end": 810
          }
        ],
        "start": 764,
        "end": 810
      },
      "declare": false,
      "start": 743,
      "end": 810
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Handler",
        "optional": false,
        "typeAnnotation": null,
        "start": 817,
        "end": 824
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 826
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 825,
            "end": 826
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 829
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 828,
            "end": 829
          }
        ],
        "start": 824,
        "end": 830
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 833,
            "end": 834
          },
          "typeArguments": null,
          "start": 833,
          "end": 834
        },
        "extendsType": {
          "type": "TSVoidKeyword",
          "start": 843,
          "end": 847
        },
        "trueType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 862,
                    "end": 863
                  },
                  "typeArguments": null,
                  "start": 862,
                  "end": 863
                },
                "start": 860,
                "end": 863
              },
              "start": 855,
              "end": 863
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 868,
                "end": 869
              },
              "typeArguments": null,
              "start": 868,
              "end": 869
            },
            "start": 865,
            "end": 869
          },
          "start": 854,
          "end": 869
        },
        "falseType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 884,
                    "end": 885
                  },
                  "typeArguments": null,
                  "start": 884,
                  "end": 885
                },
                "start": 882,
                "end": 885
              },
              "start": 877,
              "end": 885
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 896,
                    "end": 897
                  },
                  "typeArguments": null,
                  "start": 896,
                  "end": 897
                },
                "start": 894,
                "end": 897
              },
              "start": 887,
              "end": 897
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 903
              },
              "typeArguments": null,
              "start": 902,
              "end": 903
            },
            "start": 899,
            "end": 903
          },
          "start": 876,
          "end": 903
        },
        "start": 833,
        "end": 903
      },
      "declare": false,
      "start": 812,
      "end": 903
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionHandler",
        "optional": false,
        "typeAnnotation": null,
        "start": 915,
        "end": 928
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 930
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 929,
            "end": 930
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 932,
              "end": 933
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 932,
            "end": 933
          }
        ],
        "start": 928,
        "end": 934
      },
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
              "name": "actionType",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 951
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 953,
                  "end": 963
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 964,
                        "end": 965
                      },
                      "typeArguments": null,
                      "start": 964,
                      "end": 965
                    }
                  ],
                  "start": 963,
                  "end": 966
                },
                "start": 953,
                "end": 966
              },
              "start": 951,
              "end": 966
            },
            "accessibility": null,
            "static": false,
            "start": 941,
            "end": 966
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler",
              "optional": false,
              "typeAnnotation": null,
              "start": 971,
              "end": 978
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Handler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 980,
                  "end": 987
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 988,
                        "end": 989
                      },
                      "typeArguments": null,
                      "start": 988,
                      "end": 989
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 991,
                        "end": 992
                      },
                      "typeArguments": null,
                      "start": 991,
                      "end": 992
                    }
                  ],
                  "start": 987,
                  "end": 993
                },
                "start": 980,
                "end": 993
              },
              "start": 978,
              "end": 993
            },
            "accessibility": null,
            "static": false,
            "start": 971,
            "end": 993
          }
        ],
        "start": 935,
        "end": 995
      },
      "declare": false,
      "start": 905,
      "end": 995
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "handler",
        "optional": false,
        "typeAnnotation": null,
        "start": 1014,
        "end": 1021
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1022,
              "end": 1023
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1022,
            "end": 1023
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1025,
              "end": 1026
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1025,
            "end": 1026
          }
        ],
        "start": 1021,
        "end": 1027
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "actionType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1040,
                "end": 1050
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1051,
                      "end": 1052
                    },
                    "typeArguments": null,
                    "start": 1051,
                    "end": 1052
                  }
                ],
                "start": 1050,
                "end": 1053
              },
              "start": 1040,
              "end": 1053
            },
            "start": 1038,
            "end": 1053
          },
          "start": 1028,
          "end": 1053
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Handler",
                "optional": false,
                "typeAnnotation": null,
                "start": 1064,
                "end": 1071
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1072,
                      "end": 1073
                    },
                    "typeArguments": null,
                    "start": 1072,
                    "end": 1073
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1075,
                      "end": 1076
                    },
                    "typeArguments": null,
                    "start": 1075,
                    "end": 1076
                  }
                ],
                "start": 1071,
                "end": 1077
              },
              "start": 1064,
              "end": 1077
            },
            "start": 1062,
            "end": 1077
          },
          "start": 1055,
          "end": 1077
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ActionHandler",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1093
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1094,
                  "end": 1095
                },
                "typeArguments": null,
                "start": 1094,
                "end": 1095
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1097,
                  "end": 1098
                },
                "typeArguments": null,
                "start": 1097,
                "end": 1098
              }
            ],
            "start": 1093,
            "end": 1099
          },
          "start": 1080,
          "end": 1099
        },
        "start": 1078,
        "end": 1099
      },
      "body": null,
      "expression": false,
      "start": 997,
      "end": 1099
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createReducer",
        "optional": false,
        "typeAnnotation": null,
        "start": 1118,
        "end": 1131
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1132,
              "end": 1133
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1132,
            "end": 1133
          }
        ],
        "start": 1131,
        "end": 1134
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "defaultState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 1158,
                "end": 1159
              },
              "typeArguments": null,
              "start": 1158,
              "end": 1159
            },
            "start": 1156,
            "end": 1159
          },
          "start": 1144,
          "end": 1159
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "actionHandlers",
            "optional": false,
            "typeAnnotation": null,
            "start": 1172,
            "end": 1186
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionHandler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1188,
                  "end": 1201
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1202,
                        "end": 1203
                      },
                      "typeArguments": null,
                      "start": 1202,
                      "end": 1203
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1205,
                      "end": 1208
                    }
                  ],
                  "start": 1201,
                  "end": 1209
                },
                "start": 1188,
                "end": 1209
              },
              "start": 1188,
              "end": 1211
            },
            "start": 1186,
            "end": 1211
          },
          "value": null,
          "start": 1169,
          "end": 1211
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1219,
          "end": 1222
        },
        "start": 1217,
        "end": 1222
      },
      "body": null,
      "expression": false,
      "start": 1101,
      "end": 1222
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AppState",
        "optional": false,
        "typeAnnotation": null,
        "start": 1234,
        "end": 1242
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
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1249,
              "end": 1254
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1256,
                "end": 1262
              },
              "start": 1254,
              "end": 1262
            },
            "accessibility": null,
            "static": false,
            "start": 1249,
            "end": 1262
          }
        ],
        "start": 1243,
        "end": 1264
      },
      "declare": false,
      "start": 1224,
      "end": 1264
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultState",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AppState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1286,
                  "end": 1294
                },
                "typeArguments": null,
                "start": 1286,
                "end": 1294
              },
              "start": 1284,
              "end": 1294
            },
            "start": 1272,
            "end": 1294
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
                  "name": "dummy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1303,
                  "end": 1308
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1310,
                  "end": 1312
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1303,
                "end": 1312
              }
            ],
            "start": 1297,
            "end": 1314
          },
          "definite": false,
          "start": 1272,
          "end": 1314
        }
      ],
      "declare": false,
      "start": 1266,
      "end": 1314
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "NON_VOID_ACTION",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1339,
                  "end": 1349
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1350,
                      "end": 1356
                    }
                  ],
                  "start": 1349,
                  "end": 1357
                },
                "start": 1339,
                "end": 1357
              },
              "start": 1337,
              "end": 1357
            },
            "start": 1322,
            "end": 1357
          },
          "init": {
            "type": "Literal",
            "value": "NON_VOID_ACTION",
            "raw": "'NON_VOID_ACTION'",
            "start": 1360,
            "end": 1377
          },
          "definite": false,
          "start": 1322,
          "end": 1377
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "VOID_ACTION",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1397,
                  "end": 1407
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 1408,
                      "end": 1412
                    }
                  ],
                  "start": 1407,
                  "end": 1413
                },
                "start": 1397,
                "end": 1413
              },
              "start": 1395,
              "end": 1413
            },
            "start": 1384,
            "end": 1413
          },
          "init": {
            "type": "Literal",
            "value": "VOID_ACTION",
            "raw": "'VOID_ACTION'",
            "start": 1416,
            "end": 1429
          },
          "definite": false,
          "start": 1384,
          "end": 1429
        }
      ],
      "declare": false,
      "start": 1316,
      "end": 1429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createReducer",
          "optional": false,
          "typeAnnotation": null,
          "start": 1431,
          "end": 1444
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultState",
            "optional": false,
            "typeAnnotation": null,
            "start": 1450,
            "end": 1462
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler",
              "optional": false,
              "typeAnnotation": null,
              "start": 1468,
              "end": 1475
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NON_VOID_ACTION",
                "optional": false,
                "typeAnnotation": null,
                "start": 1476,
                "end": 1491
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1494,
                    "end": 1499
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1501,
                    "end": 1509
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1514,
                  "end": 1519
                },
                "id": null,
                "generator": false,
                "start": 1493,
                "end": 1519
              }
            ],
            "optional": false,
            "start": 1468,
            "end": 1520
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "handler",
              "optional": false,
              "typeAnnotation": null,
              "start": 1526,
              "end": 1533
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "VOID_ACTION",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1545
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1547,
                    "end": 1552
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1556,
                  "end": 1561
                },
                "id": null,
                "generator": false,
                "start": 1547,
                "end": 1561
              }
            ],
            "optional": false,
            "start": 1526,
            "end": 1562
          }
        ],
        "optional": false,
        "start": 1431,
        "end": 1564
      },
      "directive": null,
      "start": 1431,
      "end": 1564
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 1582,
        "end": 1583
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1590,
              "end": 1591
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1597,
                        "end": 1603
                      },
                      "start": 1595,
                      "end": 1603
                    },
                    "start": 1594,
                    "end": 1603
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1608,
                    "end": 1612
                  },
                  "start": 1605,
                  "end": 1612
                },
                "start": 1593,
                "end": 1612
              },
              "start": 1591,
              "end": 1612
            },
            "accessibility": null,
            "static": false,
            "start": 1590,
            "end": 1613
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1616,
              "end": 1617
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSStringKeyword",
                        "start": 1623,
                        "end": 1629
                      },
                      "start": 1621,
                      "end": 1629
                    },
                    "start": 1620,
                    "end": 1629
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1634,
                    "end": 1638
                  },
                  "start": 1631,
                  "end": 1638
                },
                "start": 1619,
                "end": 1638
              },
              "start": 1617,
              "end": 1638
            },
            "accessibility": null,
            "static": false,
            "start": 1616,
            "end": 1639
          }
        ],
        "start": 1586,
        "end": 1641
      },
      "declare": false,
      "start": 1577,
      "end": 1642
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null,
        "start": 1649,
        "end": 1650
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null,
              "start": 1657,
              "end": 1659
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1660,
                    "end": 1661
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1676,
                        "end": 1677
                      },
                      "typeArguments": null,
                      "start": 1676,
                      "end": 1677
                    },
                    "start": 1670,
                    "end": 1677
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1660,
                  "end": 1677
                }
              ],
              "start": 1659,
              "end": 1678
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
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1682,
                      "end": 1683
                    },
                    "typeArguments": null,
                    "start": 1682,
                    "end": 1683
                  },
                  "start": 1680,
                  "end": 1683
                },
                "start": 1679,
                "end": 1683
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1695,
                        "end": 1696
                      },
                      "typeArguments": null,
                      "start": 1695,
                      "end": 1696
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1697,
                        "end": 1698
                      },
                      "typeArguments": null,
                      "start": 1697,
                      "end": 1698
                    },
                    "start": 1695,
                    "end": 1699
                  },
                  "start": 1693,
                  "end": 1699
                },
                "start": 1685,
                "end": 1699
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1702,
                "end": 1706
              },
              "start": 1700,
              "end": 1706
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1657,
            "end": 1707
          }
        ],
        "start": 1653,
        "end": 1709
      },
      "declare": false,
      "start": 1644,
      "end": 1710
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1727,
                  "end": 1728
                },
                "typeArguments": null,
                "start": 1727,
                "end": 1728
              },
              "start": 1725,
              "end": 1728
            },
            "start": 1724,
            "end": 1728
          },
          "init": null,
          "definite": false,
          "start": 1724,
          "end": 1728
        }
      ],
      "declare": true,
      "start": 1712,
      "end": 1729
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1730,
            "end": 1731
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null,
            "start": 1732,
            "end": 1734
          },
          "optional": false,
          "computed": false,
          "start": 1730,
          "end": 1734
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 1735,
            "end": 1738
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1740,
                "end": 1741
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1745,
              "end": 1747
            },
            "id": null,
            "generator": false,
            "start": 1740,
            "end": 1747
          }
        ],
        "optional": false,
        "start": 1730,
        "end": 1748
      },
      "directive": null,
      "start": 1730,
      "end": 1749
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1774
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
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 1792,
              "end": 1801
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1802,
                    "end": 1803
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1802,
                  "end": 1803
                }
              ],
              "start": 1801,
              "end": 1804
            },
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1810,
                    "end": 1821
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1829,
                              "end": 1830
                            },
                            "typeArguments": null,
                            "start": 1829,
                            "end": 1830
                          },
                          "start": 1827,
                          "end": 1830
                        },
                        "start": 1822,
                        "end": 1830
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 1821,
                    "end": 1832
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1810,
                  "end": 1832
                }
              ],
              "start": 1805,
              "end": 1834
            },
            "abstract": false,
            "declare": true,
            "start": 1778,
            "end": 1834
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1850,
              "end": 1864
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1865,
                    "end": 1866
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 1869,
                    "end": 1871
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1865,
                  "end": 1871
                }
              ],
              "start": 1864,
              "end": 1872
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1889,
                            "end": 1890
                          },
                          "typeArguments": null,
                          "start": 1889,
                          "end": 1890
                        },
                        "start": 1887,
                        "end": 1890
                      },
                      "start": 1882,
                      "end": 1890
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1893,
                        "end": 1902
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1903,
                              "end": 1904
                            },
                            "typeArguments": null,
                            "start": 1903,
                            "end": 1904
                          }
                        ],
                        "start": 1902,
                        "end": 1905
                      },
                      "start": 1893,
                      "end": 1905
                    },
                    "start": 1891,
                    "end": 1905
                  },
                  "start": 1877,
                  "end": 1906
                }
              ],
              "start": 1873,
              "end": 1908
            },
            "declare": false,
            "start": 1840,
            "end": 1908
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CreateElementChildren",
              "optional": false,
              "typeAnnotation": null,
              "start": 1915,
              "end": 1936
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1937,
                    "end": 1938
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1937,
                  "end": 1938
                }
              ],
              "start": 1936,
              "end": 1939
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1944,
                  "end": 1945
                },
                "typeArguments": null,
                "start": 1944,
                "end": 1945
              },
              "extendsType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1956,
                      "end": 1964
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1973,
                            "end": 1974
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1973,
                          "end": 1974
                        },
                        "start": 1967,
                        "end": 1974
                      },
                      "start": 1965,
                      "end": 1974
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1956,
                    "end": 1974
                  }
                ],
                "start": 1954,
                "end": 1976
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1981,
                    "end": 1982
                  },
                  "typeArguments": null,
                  "start": 1981,
                  "end": 1982
                },
                "extendsType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1991,
                    "end": 1994
                  },
                  "start": 1991,
                  "end": 1996
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2003,
                    "end": 2004
                  },
                  "typeArguments": null,
                  "start": 2003,
                  "end": 2004
                },
                "falseType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2011,
                      "end": 2012
                    },
                    "typeArguments": null,
                    "start": 2011,
                    "end": 2012
                  },
                  "start": 2011,
                  "end": 2014
                },
                "start": 1981,
                "end": 2014
              },
              "falseType": {
                "type": "TSUnknownKeyword",
                "start": 2019,
                "end": 2026
              },
              "start": 1944,
              "end": 2026
            },
            "declare": false,
            "start": 1910,
            "end": 2027
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 2046,
              "end": 2059
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
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2060,
                    "end": 2061
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 2070,
                    "end": 2072
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2060,
                  "end": 2072
                }
              ],
              "start": 2059,
              "end": 2073
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2083,
                      "end": 2097
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2098,
                            "end": 2099
                          },
                          "typeArguments": null,
                          "start": 2098,
                          "end": 2099
                        }
                      ],
                      "start": 2097,
                      "end": 2100
                    },
                    "start": 2083,
                    "end": 2100
                  },
                  "start": 2081,
                  "end": 2100
                },
                "start": 2077,
                "end": 2100
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2107,
                  "end": 2115
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CreateElementChildren",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2117,
                      "end": 2138
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2139,
                            "end": 2140
                          },
                          "typeArguments": null,
                          "start": 2139,
                          "end": 2140
                        }
                      ],
                      "start": 2138,
                      "end": 2141
                    },
                    "start": 2117,
                    "end": 2141
                  },
                  "start": 2115,
                  "end": 2141
                },
                "value": null,
                "start": 2104,
                "end": 2141
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2145,
                "end": 2148
              },
              "start": 2143,
              "end": 2148
            },
            "body": null,
            "expression": false,
            "start": 2029,
            "end": 2149
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2168,
              "end": 2182
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
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2183,
                    "end": 2184
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 2193,
                    "end": 2195
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2183,
                  "end": 2195
                }
              ],
              "start": 2182,
              "end": 2196
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2206,
                      "end": 2220
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2221,
                            "end": 2222
                          },
                          "typeArguments": null,
                          "start": 2221,
                          "end": 2222
                        }
                      ],
                      "start": 2220,
                      "end": 2223
                    },
                    "start": 2206,
                    "end": 2223
                  },
                  "start": 2204,
                  "end": 2223
                },
                "start": 2200,
                "end": 2223
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "child",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CreateElementChildren",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2234,
                      "end": 2255
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2256,
                            "end": 2257
                          },
                          "typeArguments": null,
                          "start": 2256,
                          "end": 2257
                        }
                      ],
                      "start": 2255,
                      "end": 2258
                    },
                    "start": 2234,
                    "end": 2258
                  },
                  "start": 2232,
                  "end": 2258
                },
                "start": 2227,
                "end": 2258
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2262,
                "end": 2265
              },
              "start": 2260,
              "end": 2265
            },
            "body": null,
            "expression": false,
            "start": 2151,
            "end": 2266
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferFunctionTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 2274,
              "end": 2292
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 2301,
              "end": 2310
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
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
                        "name": "children",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2312,
                        "end": 2320
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2328,
                                  "end": 2334
                                },
                                "start": 2326,
                                "end": 2334
                              },
                              "start": 2323,
                              "end": 2334
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2339,
                              "end": 2345
                            },
                            "start": 2336,
                            "end": 2345
                          },
                          "start": 2322,
                          "end": 2345
                        },
                        "start": 2320,
                        "end": 2345
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2312,
                      "end": 2345
                    }
                  ],
                  "start": 2311,
                  "end": 2346
                }
              ],
              "start": 2310,
              "end": 2347
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 2348,
              "end": 2350
            },
            "abstract": false,
            "declare": false,
            "start": 2268,
            "end": 2350
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 2352,
                "end": 2365
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferFunctionTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2366,
                  "end": 2384
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2387,
                      "end": 2390
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 2395,
                      "end": 2397
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2400,
                      "end": 2403
                    },
                    "start": 2395,
                    "end": 2403
                  },
                  "id": null,
                  "generator": false,
                  "start": 2386,
                  "end": 2403
                }
              ],
              "optional": false,
              "start": 2352,
              "end": 2404
            },
            "directive": null,
            "start": 2352,
            "end": 2405
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createElement2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2407,
                "end": 2421
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferFunctionTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2422,
                  "end": 2440
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2444,
                          "end": 2447
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 2452,
                          "end": 2454
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2457,
                          "end": 2460
                        },
                        "start": 2452,
                        "end": 2460
                      },
                      "id": null,
                      "generator": false,
                      "start": 2443,
                      "end": 2460
                    }
                  ],
                  "start": 2442,
                  "end": 2461
                }
              ],
              "optional": false,
              "start": 2407,
              "end": 2462
            },
            "directive": null,
            "start": 2407,
            "end": 2463
          }
        ],
        "start": 1775,
        "end": 2466
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1762,
      "end": 2466
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 2484,
        "end": 2492
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
              "start": 2493,
              "end": 2494
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2493,
            "end": 2494
          }
        ],
        "start": 2492,
        "end": 2495
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2502,
              "end": 2507
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
                  "start": 2509,
                  "end": 2510
                },
                "typeArguments": null,
                "start": 2509,
                "end": 2510
              },
              "start": 2507,
              "end": 2510
            },
            "accessibility": null,
            "static": false,
            "start": 2502,
            "end": 2511
          }
        ],
        "start": 2498,
        "end": 2513
      },
      "declare": false,
      "start": 2479,
      "end": 2513
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OuterBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 2520,
        "end": 2528
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
              "start": 2529,
              "end": 2530
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2529,
            "end": 2530
          }
        ],
        "start": 2528,
        "end": 2531
      },
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
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 2538,
              "end": 2543
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InnerBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2545,
                  "end": 2553
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2554,
                        "end": 2555
                      },
                      "typeArguments": null,
                      "start": 2554,
                      "end": 2555
                    }
                  ],
                  "start": 2553,
                  "end": 2556
                },
                "start": 2545,
                "end": 2556
              },
              "start": 2543,
              "end": 2556
            },
            "accessibility": null,
            "static": false,
            "start": 2538,
            "end": 2556
          }
        ],
        "start": 2534,
        "end": 2558
      },
      "declare": false,
      "start": 2515,
      "end": 2559
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoxConsumerFromOuterBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 2566,
        "end": 2589
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
              "start": 2590,
              "end": 2591
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2590,
            "end": 2591
          }
        ],
        "start": 2589,
        "end": 2592
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2597,
            "end": 2598
          },
          "typeArguments": null,
          "start": 2597,
          "end": 2598
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OuterBox",
            "optional": false,
            "typeAnnotation": null,
            "start": 2607,
            "end": 2615
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2622,
                    "end": 2623
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2622,
                  "end": 2623
                },
                "start": 2616,
                "end": 2623
              }
            ],
            "start": 2615,
            "end": 2624
          },
          "start": 2607,
          "end": 2624
        },
        "trueType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InnerBox",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2639,
                    "end": 2647
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2648,
                          "end": 2649
                        },
                        "typeArguments": null,
                        "start": 2648,
                        "end": 2649
                      }
                    ],
                    "start": 2647,
                    "end": 2650
                  },
                  "start": 2639,
                  "end": 2650
                },
                "start": 2637,
                "end": 2650
              },
              "start": 2634,
              "end": 2650
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 2655,
              "end": 2659
            },
            "start": 2652,
            "end": 2659
          },
          "start": 2633,
          "end": 2659
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2668,
          "end": 2673
        },
        "start": 2597,
        "end": 2673
      },
      "declare": false,
      "start": 2561,
      "end": 2674
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "passContentsToFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 2693,
        "end": 2711
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
              "start": 2712,
              "end": 2713
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2712,
            "end": 2713
          }
        ],
        "start": 2711,
        "end": 2714
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "outerBox",
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
                "start": 2725,
                "end": 2726
              },
              "typeArguments": null,
              "start": 2725,
              "end": 2726
            },
            "start": 2723,
            "end": 2726
          },
          "start": 2715,
          "end": 2726
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "consumer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BoxConsumerFromOuterBox",
                "optional": false,
                "typeAnnotation": null,
                "start": 2738,
                "end": 2761
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2762,
                      "end": 2763
                    },
                    "typeArguments": null,
                    "start": 2762,
                    "end": 2763
                  }
                ],
                "start": 2761,
                "end": 2764
              },
              "start": 2738,
              "end": 2764
            },
            "start": 2736,
            "end": 2764
          },
          "start": 2728,
          "end": 2764
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2767,
          "end": 2771
        },
        "start": 2765,
        "end": 2771
      },
      "body": null,
      "expression": false,
      "start": 2676,
      "end": 2772
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "outerBoxOfString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OuterBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2806,
                  "end": 2814
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2815,
                      "end": 2821
                    }
                  ],
                  "start": 2814,
                  "end": 2822
                },
                "start": 2806,
                "end": 2822
              },
              "start": 2804,
              "end": 2822
            },
            "start": 2788,
            "end": 2822
          },
          "init": null,
          "definite": false,
          "start": 2788,
          "end": 2822
        }
      ],
      "declare": true,
      "start": 2774,
      "end": 2823
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "passContentsToFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 2825,
          "end": 2843
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "outerBoxOfString",
            "optional": false,
            "typeAnnotation": null,
            "start": 2844,
            "end": 2860
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 2862,
                "end": 2865
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "box",
                "optional": false,
                "typeAnnotation": null,
                "start": 2869,
                "end": 2872
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2873,
                "end": 2878
              },
              "optional": false,
              "computed": false,
              "start": 2869,
              "end": 2878
            },
            "id": null,
            "generator": false,
            "start": 2862,
            "end": 2878
          }
        ],
        "optional": false,
        "start": 2825,
        "end": 2879
      },
      "directive": null,
      "start": 2825,
      "end": 2880
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DooDad",
        "optional": false,
        "typeAnnotation": null,
        "start": 2909,
        "end": 2915
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "SOMETHING",
              "raw": "'SOMETHING'",
              "start": 2918,
              "end": 2929
            },
            "start": 2918,
            "end": 2929
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "ELSE",
              "raw": "'ELSE'",
              "start": 2932,
              "end": 2938
            },
            "start": 2932,
            "end": 2938
          }
        ],
        "start": 2918,
        "end": 2938
      },
      "declare": false,
      "start": 2904,
      "end": 2940
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Interesting",
        "optional": false,
        "typeAnnotation": null,
        "start": 2948,
        "end": 2959
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
              "name": "compiles",
              "optional": false,
              "typeAnnotation": null,
              "start": 2970,
              "end": 2978
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2986,
                    "end": 2993
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2994,
                          "end": 3000
                        },
                        "typeArguments": null,
                        "start": 2994,
                        "end": 3000
                      }
                    ],
                    "start": 2993,
                    "end": 3001
                  },
                  "start": 2986,
                  "end": 3001
                },
                "start": 2984,
                "end": 3001
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3016,
                              "end": 3023
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3024,
                              "end": 3031
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3016,
                            "end": 3031
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3016,
                          "end": 3033
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3034,
                          "end": 3038
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3016,
                        "end": 3038
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 3054,
                                    "end": 3055
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 3058,
                                    "end": 3059
                                  },
                                  "start": 3054,
                                  "end": 3059
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": "SOMETHING",
                                        "raw": "'SOMETHING'",
                                        "start": 3074,
                                        "end": 3085
                                      },
                                      "start": 3067,
                                      "end": 3086
                                    }
                                  ],
                                  "start": 3061,
                                  "end": 3091
                                },
                                "alternate": null,
                                "start": 3050,
                                "end": 3091
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": "ELSE",
                                  "raw": "'ELSE'",
                                  "start": 3102,
                                  "end": 3108
                                },
                                "start": 3095,
                                "end": 3109
                              }
                            ],
                            "start": 3045,
                            "end": 3113
                          },
                          "id": null,
                          "generator": false,
                          "start": 3039,
                          "end": 3113
                        }
                      ],
                      "optional": false,
                      "start": 3016,
                      "end": 3114
                    },
                    "start": 3009,
                    "end": 3115
                  }
                ],
                "start": 3005,
                "end": 3118
              },
              "id": null,
              "generator": false,
              "start": 2981,
              "end": 3118
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2963,
            "end": 3119
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doesnt",
              "optional": false,
              "typeAnnotation": null,
              "start": 3128,
              "end": 3134
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3142,
                    "end": 3149
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3150,
                          "end": 3156
                        },
                        "typeArguments": null,
                        "start": 3150,
                        "end": 3156
                      }
                    ],
                    "start": 3149,
                    "end": 3157
                  },
                  "start": 3142,
                  "end": 3157
                },
                "start": 3140,
                "end": 3157
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3172,
                              "end": 3179
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3180,
                              "end": 3187
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3172,
                            "end": 3187
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3172,
                          "end": 3189
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3190,
                          "end": 3194
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3172,
                        "end": 3194
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
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
                                  "value": "ELSE",
                                  "raw": "'ELSE'",
                                  "start": 3213,
                                  "end": 3219
                                },
                                "start": 3206,
                                "end": 3220
                              }
                            ],
                            "start": 3201,
                            "end": 3224
                          },
                          "id": null,
                          "generator": false,
                          "start": 3195,
                          "end": 3224
                        }
                      ],
                      "optional": false,
                      "start": 3172,
                      "end": 3225
                    },
                    "start": 3165,
                    "end": 3226
                  }
                ],
                "start": 3161,
                "end": 3229
              },
              "id": null,
              "generator": false,
              "start": 3137,
              "end": 3229
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 3121,
            "end": 3230
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slightlyDifferentErrorMessage",
              "optional": false,
              "typeAnnotation": null,
              "start": 3239,
              "end": 3268
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3276,
                    "end": 3283
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DooDad",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3284,
                          "end": 3290
                        },
                        "typeArguments": null,
                        "start": 3284,
                        "end": 3290
                      }
                    ],
                    "start": 3283,
                    "end": 3291
                  },
                  "start": 3276,
                  "end": 3291
                },
                "start": 3274,
                "end": 3291
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3306,
                              "end": 3313
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3314,
                              "end": 3321
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3306,
                            "end": 3321
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3306,
                          "end": 3323
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3324,
                          "end": 3328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3306,
                        "end": 3328
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 3344,
                                    "end": 3345
                                  },
                                  "operator": "<",
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 3348,
                                    "end": 3349
                                  },
                                  "start": 3344,
                                  "end": 3349
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Literal",
                                        "value": "SOMETHING",
                                        "raw": "'SOMETHING'",
                                        "start": 3364,
                                        "end": 3375
                                      },
                                      "start": 3357,
                                      "end": 3376
                                    }
                                  ],
                                  "start": 3351,
                                  "end": 3381
                                },
                                "alternate": null,
                                "start": 3340,
                                "end": 3381
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": "SOMETHING",
                                  "raw": "'SOMETHING'",
                                  "start": 3392,
                                  "end": 3403
                                },
                                "start": 3385,
                                "end": 3404
                              }
                            ],
                            "start": 3335,
                            "end": 3408
                          },
                          "id": null,
                          "generator": false,
                          "start": 3329,
                          "end": 3408
                        }
                      ],
                      "optional": false,
                      "start": 3306,
                      "end": 3409
                    },
                    "start": 3299,
                    "end": 3410
                  }
                ],
                "start": 3295,
                "end": 3413
              },
              "id": null,
              "generator": false,
              "start": 3271,
              "end": 3413
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 3232,
            "end": 3414
          }
        ],
        "start": 2960,
        "end": 3416
      },
      "abstract": false,
      "declare": false,
      "start": 2942,
      "end": 3416
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invoke",
        "optional": false,
        "typeAnnotation": null,
        "start": 3457,
        "end": 3463
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
              "start": 3464,
              "end": 3465
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3464,
            "end": 3465
          }
        ],
        "start": 3463,
        "end": 3466
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3476,
                    "end": 3477
                  },
                  "typeArguments": null,
                  "start": 3476,
                  "end": 3477
                },
                "start": 3473,
                "end": 3477
              },
              "start": 3470,
              "end": 3477
            },
            "start": 3468,
            "end": 3477
          },
          "start": 3467,
          "end": 3477
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3480,
            "end": 3481
          },
          "typeArguments": null,
          "start": 3480,
          "end": 3481
        },
        "start": 3478,
        "end": 3481
      },
      "body": null,
      "expression": false,
      "start": 3440,
      "end": 3482
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3492,
                      "end": 3493
                    },
                    "start": 3492,
                    "end": 3493
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3496,
                      "end": 3497
                    },
                    "start": 3496,
                    "end": 3497
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 3500,
                      "end": 3501
                    },
                    "start": 3500,
                    "end": 3501
                  }
                ],
                "start": 3492,
                "end": 3501
              },
              "start": 3490,
              "end": 3501
            },
            "start": 3488,
            "end": 3501
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "invoke",
              "optional": false,
              "typeAnnotation": null,
              "start": 3504,
              "end": 3510
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3517,
                  "end": 3518
                },
                "id": null,
                "generator": false,
                "start": 3511,
                "end": 3518
              }
            ],
            "optional": false,
            "start": 3504,
            "end": 3519
          },
          "definite": false,
          "start": 3488,
          "end": 3519
        }
      ],
      "declare": false,
      "start": 3484,
      "end": 3520
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignPartial",
        "optional": false,
        "typeAnnotation": null,
        "start": 3561,
        "end": 3574
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
              "start": 3575,
              "end": 3576
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3575,
            "end": 3576
          }
        ],
        "start": 3574,
        "end": 3577
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
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
                "start": 3586,
                "end": 3587
              },
              "typeArguments": null,
              "start": 3586,
              "end": 3587
            },
            "start": 3584,
            "end": 3587
          },
          "start": 3578,
          "end": 3587
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "partial",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 3598,
                "end": 3605
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3606,
                      "end": 3607
                    },
                    "typeArguments": null,
                    "start": 3606,
                    "end": 3607
                  }
                ],
                "start": 3605,
                "end": 3608
              },
              "start": 3598,
              "end": 3608
            },
            "start": 3596,
            "end": 3608
          },
          "start": 3589,
          "end": 3608
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3611,
            "end": 3612
          },
          "typeArguments": null,
          "start": 3611,
          "end": 3612
        },
        "start": 3609,
        "end": 3612
      },
      "body": null,
      "expression": false,
      "start": 3544,
      "end": 3613
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 3619,
            "end": 3622
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
                  "start": 3629,
                  "end": 3632
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3638,
                          "end": 3644
                        },
                        "start": 3636,
                        "end": 3644
                      },
                      "start": 3633,
                      "end": 3644
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3646,
                    "end": 3648
                  },
                  "expression": false,
                  "start": 3632,
                  "end": 3648
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3629,
                "end": 3648
              }
            ],
            "start": 3625,
            "end": 3650
          },
          "definite": false,
          "start": 3619,
          "end": 3650
        }
      ],
      "declare": false,
      "start": 3615,
      "end": 3650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assignPartial",
          "optional": false,
          "typeAnnotation": null,
          "start": 3652,
          "end": 3665
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 3666,
            "end": 3669
          },
          {
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
                  "start": 3673,
                  "end": 3676
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3680,
                        "end": 3684
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 3677,
                      "end": 3684
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 3686,
                    "end": 3688
                  },
                  "expression": false,
                  "start": 3676,
                  "end": 3688
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3673,
                "end": 3688
              }
            ],
            "start": 3671,
            "end": 3690
          }
        ],
        "optional": false,
        "start": 3652,
        "end": 3691
      },
      "directive": null,
      "start": 3652,
      "end": 3692
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 10,
  "end": 3719
}
```
