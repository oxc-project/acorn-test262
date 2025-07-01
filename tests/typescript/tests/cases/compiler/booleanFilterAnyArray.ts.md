__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bullean",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 18,
        "end": 21
      },
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BulleanConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 50
      },
      "typeParameters": null,
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
                "name": "v1",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 66,
                    "end": 69
                  },
                  "start": 64,
                  "end": 69
                },
                "start": 61,
                "end": 69
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bullean",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 79
                },
                "typeArguments": null,
                "start": 72,
                "end": 79
              },
              "start": 70,
              "end": 79
            },
            "start": 57,
            "end": 80
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 86,
                    "end": 87
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 86,
                  "end": 87
                }
              ],
              "start": 85,
              "end": 88
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v2",
                "optional": true,
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
                      "start": 94,
                      "end": 95
                    },
                    "typeArguments": null,
                    "start": 94,
                    "end": 95
                  },
                  "start": 92,
                  "end": 95
                },
                "start": 89,
                "end": 95
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 100
                },
                "asserts": false,
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
                      "start": 104,
                      "end": 105
                    },
                    "typeArguments": null,
                    "start": 104,
                    "end": 105
                  },
                  "start": 104,
                  "end": 105
                },
                "start": 98,
                "end": 105
              },
              "start": 96,
              "end": 105
            },
            "start": 85,
            "end": 106
          }
        ],
        "start": 51,
        "end": 108
      },
      "declare": false,
      "start": 22,
      "end": 108
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ari",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 123
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
              "start": 124,
              "end": 125
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 124,
            "end": 125
          }
        ],
        "start": 123,
        "end": 126
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 139
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
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 150,
                    "end": 151
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 140,
                  "end": 151
                }
              ],
              "start": 139,
              "end": 152
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 166,
                              "end": 167
                            },
                            "typeArguments": null,
                            "start": 166,
                            "end": 167
                          },
                          "start": 164,
                          "end": 167
                        },
                        "start": 159,
                        "end": 167
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 172,
                          "end": 177
                        },
                        "asserts": false,
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
                              "start": 181,
                              "end": 182
                            },
                            "typeArguments": null,
                            "start": 181,
                            "end": 182
                          },
                          "start": 181,
                          "end": 182
                        },
                        "start": 172,
                        "end": 182
                      },
                      "start": 169,
                      "end": 182
                    },
                    "start": 158,
                    "end": 182
                  },
                  "start": 156,
                  "end": 182
                },
                "start": 153,
                "end": 182
              }
            ],
            "returnType": {
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
                    "start": 185,
                    "end": 186
                  },
                  "typeArguments": null,
                  "start": 185,
                  "end": 186
                },
                "extendsType": {
                  "type": "TSAnyKeyword",
                  "start": 195,
                  "end": 198
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Ari",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 204
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 205,
                        "end": 208
                      }
                    ],
                    "start": 204,
                    "end": 209
                  },
                  "start": 201,
                  "end": 209
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Ari",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 215
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
                          "start": 216,
                          "end": 217
                        },
                        "typeArguments": null,
                        "start": 216,
                        "end": 217
                      }
                    ],
                    "start": 215,
                    "end": 218
                  },
                  "start": 212,
                  "end": 218
                },
                "start": 185,
                "end": 218
              },
              "start": 183,
              "end": 218
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 133,
            "end": 219
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 230
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 244,
                              "end": 245
                            },
                            "typeArguments": null,
                            "start": 244,
                            "end": 245
                          },
                          "start": 242,
                          "end": 245
                        },
                        "start": 237,
                        "end": 245
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 250,
                        "end": 257
                      },
                      "start": 247,
                      "end": 257
                    },
                    "start": 236,
                    "end": 257
                  },
                  "start": 234,
                  "end": 257
                },
                "start": 231,
                "end": 257
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ari",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 263
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
                        "start": 264,
                        "end": 265
                      },
                      "typeArguments": null,
                      "start": 264,
                      "end": 265
                    }
                  ],
                  "start": 263,
                  "end": 266
                },
                "start": 260,
                "end": 266
              },
              "start": 258,
              "end": 266
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 224,
            "end": 267
          }
        ],
        "start": 127,
        "end": 269
      },
      "declare": false,
      "start": 110,
      "end": 269
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
            "name": "Bullean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BulleanConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 309
                },
                "typeArguments": null,
                "start": 291,
                "end": 309
              },
              "start": 289,
              "end": 309
            },
            "start": 282,
            "end": 309
          },
          "init": null,
          "definite": false,
          "start": 282,
          "end": 309
        }
      ],
      "declare": true,
      "start": 270,
      "end": 310
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
            "name": "anys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ari",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 332
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 333,
                      "end": 336
                    }
                  ],
                  "start": 332,
                  "end": 337
                },
                "start": 329,
                "end": 337
              },
              "start": 327,
              "end": 337
            },
            "start": 323,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 323,
          "end": 337
        }
      ],
      "declare": true,
      "start": 311,
      "end": 338
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
            "name": "xs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ari",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 350
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 351,
                      "end": 354
                    }
                  ],
                  "start": 350,
                  "end": 355
                },
                "start": 347,
                "end": 355
              },
              "start": 345,
              "end": 355
            },
            "start": 343,
            "end": 355
          },
          "init": null,
          "definite": false,
          "start": 343,
          "end": 355
        }
      ],
      "declare": false,
      "start": 339,
      "end": 356
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
            "name": "xs",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 363
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "anys",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 370
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 377
              },
              "optional": false,
              "computed": false,
              "start": 366,
              "end": 377
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Bullean",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 385
              }
            ],
            "optional": false,
            "start": 366,
            "end": 386
          },
          "definite": false,
          "start": 361,
          "end": 386
        }
      ],
      "declare": false,
      "start": 357,
      "end": 386
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
            "name": "realanys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 410,
                  "end": 413
                },
                "start": 410,
                "end": 415
              },
              "start": 408,
              "end": 415
            },
            "start": 400,
            "end": 415
          },
          "init": null,
          "definite": false,
          "start": 400,
          "end": 415
        }
      ],
      "declare": true,
      "start": 388,
      "end": 416
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
            "name": "ys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 425,
                  "end": 428
                },
                "start": 425,
                "end": 430
              },
              "start": 423,
              "end": 430
            },
            "start": 421,
            "end": 430
          },
          "init": null,
          "definite": false,
          "start": 421,
          "end": 430
        }
      ],
      "declare": false,
      "start": 417,
      "end": 431
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
            "name": "ys",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 438
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "realanys",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 449
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 456
              },
              "optional": false,
              "computed": false,
              "start": 441,
              "end": 456
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Boolean",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 464
              }
            ],
            "optional": false,
            "start": 441,
            "end": 465
          },
          "definite": false,
          "start": 436,
          "end": 465
        }
      ],
      "declare": false,
      "start": 432,
      "end": 465
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 474
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 484
                    },
                    "value": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "'x'",
                      "start": 486,
                      "end": 489
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 480,
                    "end": 489
                  }
                ],
                "start": 478,
                "end": 491
              }
            ],
            "start": 477,
            "end": 492
          },
          "definite": false,
          "start": 471,
          "end": 492
        }
      ],
      "declare": false,
      "start": 467,
      "end": 492
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
            "name": "foor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 503,
                  "end": 508
                },
                "typeArguments": {
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
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 510,
                            "end": 514
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 516,
                              "end": 522
                            },
                            "start": 514,
                            "end": 522
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 510,
                          "end": 522
                        }
                      ],
                      "start": 509,
                      "end": 523
                    }
                  ],
                  "start": 508,
                  "end": 524
                },
                "start": 503,
                "end": 524
              },
              "start": 501,
              "end": 524
            },
            "start": 497,
            "end": 524
          },
          "init": null,
          "definite": false,
          "start": 497,
          "end": 524
        }
      ],
      "declare": false,
      "start": 493,
      "end": 524
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
            "name": "foor",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 533
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 539
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 540,
                "end": 546
              },
              "optional": false,
              "computed": false,
              "start": 536,
              "end": 546
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 548
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 553
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 558
                  },
                  "optional": false,
                  "computed": false,
                  "start": 552,
                  "end": 558
                },
                "id": null,
                "generator": false,
                "start": 547,
                "end": 558
              }
            ],
            "optional": false,
            "start": 536,
            "end": 559
          },
          "definite": false,
          "start": 529,
          "end": 559
        }
      ],
      "declare": false,
      "start": 525,
      "end": 559
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
            "name": "foos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 575
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 576,
                      "end": 583
                    }
                  ],
                  "start": 575,
                  "end": 584
                },
                "start": 570,
                "end": 584
              },
              "start": 568,
              "end": 584
            },
            "start": 564,
            "end": 584
          },
          "init": null,
          "definite": false,
          "start": 564,
          "end": 584
        }
      ],
      "declare": false,
      "start": 560,
      "end": 584
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
            "name": "foos",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 593
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 597,
                    "end": 601
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 603,
                    "end": 607
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 609,
                    "end": 614
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 616,
                    "end": 620
                  }
                ],
                "start": 596,
                "end": 621
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 628
              },
              "optional": false,
              "computed": false,
              "start": 596,
              "end": 628
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 630,
                    "end": 635
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 638,
                      "end": 643
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 647,
                        "end": 654
                      },
                      "start": 647,
                      "end": 654
                    },
                    "start": 638,
                    "end": 654
                  },
                  "start": 636,
                  "end": 654
                },
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 658,
                    "end": 663
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 668,
                    "end": 672
                  },
                  "start": 658,
                  "end": 672
                },
                "id": null,
                "generator": false,
                "start": 629,
                "end": 672
              }
            ],
            "optional": false,
            "start": 596,
            "end": 673
          },
          "definite": false,
          "start": 589,
          "end": 673
        }
      ],
      "declare": false,
      "start": 585,
      "end": 673
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 673
}
```
