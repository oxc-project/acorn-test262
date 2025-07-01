__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Types",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "boolean",
              "raw": "'boolean'",
              "start": 13,
              "end": 22
            },
            "start": 13,
            "end": 22
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "unknown",
              "raw": "'unknown'",
              "start": 25,
              "end": 34
            },
            "start": 25,
            "end": 34
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 37,
              "end": 45
            },
            "start": 37,
            "end": 45
          }
        ],
        "start": 13,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 63
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
              "start": 64,
              "end": 65
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 82,
                          "end": 88
                        },
                        "start": 80,
                        "end": 88
                      },
                      "start": 77,
                      "end": 88
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 96
                      },
                      "typeArguments": null,
                      "start": 91,
                      "end": 96
                    },
                    "start": 89,
                    "end": 96
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 76,
                  "end": 96
                }
              ],
              "start": 74,
              "end": 98
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 98
          }
        ],
        "start": 63,
        "end": 99
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 121
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "typeArguments": null,
            "start": 131,
            "end": 132
          },
          "start": 125,
          "end": 132
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              },
              "typeArguments": null,
              "start": 135,
              "end": 136
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 140
              },
              "typeArguments": null,
              "start": 137,
              "end": 140
            },
            "start": 135,
            "end": 141
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "boolean",
              "raw": "'boolean'",
              "start": 150,
              "end": 159
            },
            "start": 150,
            "end": 159
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "start": 162,
            "end": 169
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                },
                "typeArguments": null,
                "start": 172,
                "end": 173
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 177
                },
                "typeArguments": null,
                "start": 174,
                "end": 177
              },
              "start": 172,
              "end": 178
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 187,
                "end": 195
              },
              "start": 187,
              "end": 195
            },
            "trueType": {
              "type": "TSStringKeyword",
              "start": 198,
              "end": 204
            },
            "falseType": {
              "type": "TSUnknownKeyword",
              "start": 207,
              "end": 214
            },
            "start": 172,
            "end": 214
          },
          "start": 135,
          "end": 214
        },
        "optional": false,
        "readonly": true,
        "start": 102,
        "end": 216
      },
      "declare": false,
      "start": 48,
      "end": 216
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyCtor",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 230
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
              "start": 231,
              "end": 232
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 241,
              "end": 247
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 231,
            "end": 247
          }
        ],
        "start": 230,
        "end": 248
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 260
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 262,
                  "end": 265
                },
                "start": 262,
                "end": 267
              },
              "start": 260,
              "end": 267
            },
            "value": null,
            "start": 256,
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
              "name": "P",
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
        "start": 251,
        "end": 273
      },
      "declare": false,
      "start": 218,
      "end": 273
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "classWithProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 311
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
              "start": 312,
              "end": 313
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 330,
                          "end": 336
                        },
                        "start": 328,
                        "end": 336
                      },
                      "start": 325,
                      "end": 336
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Types",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 339,
                        "end": 344
                      },
                      "typeArguments": null,
                      "start": 339,
                      "end": 344
                    },
                    "start": 337,
                    "end": 344
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 324,
                  "end": 344
                }
              ],
              "start": 322,
              "end": 346
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 312,
            "end": 346
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 349
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 358,
              "end": 364
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 348,
            "end": 364
          }
        ],
        "start": 311,
        "end": 365
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "properties",
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
                "start": 378,
                "end": 379
              },
              "typeArguments": null,
              "start": 378,
              "end": 379
            },
            "start": 376,
            "end": 379
          },
          "start": 366,
          "end": 379
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "klass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyCtor",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 395
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
                      "start": 396,
                      "end": 397
                    },
                    "typeArguments": null,
                    "start": 396,
                    "end": 397
                  }
                ],
                "start": 395,
                "end": 398
              },
              "start": 388,
              "end": 398
            },
            "start": 386,
            "end": 398
          },
          "start": 381,
          "end": 398
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
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
                        "start": 414,
                        "end": 415
                      },
                      "typeArguments": null,
                      "start": 414,
                      "end": 415
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 418,
                        "end": 428
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
                              "start": 429,
                              "end": 430
                            },
                            "typeArguments": null,
                            "start": 429,
                            "end": 430
                          }
                        ],
                        "start": 428,
                        "end": 431
                      },
                      "start": 418,
                      "end": 431
                    }
                  ],
                  "start": 414,
                  "end": 431
                },
                "start": 412,
                "end": 431
              },
              "start": 407,
              "end": 432
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 446
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
                        "start": 448,
                        "end": 449
                      },
                      "typeArguments": null,
                      "start": 448,
                      "end": 449
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 462
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
                              "start": 463,
                              "end": 464
                            },
                            "typeArguments": null,
                            "start": 463,
                            "end": 464
                          }
                        ],
                        "start": 462,
                        "end": 465
                      },
                      "start": 452,
                      "end": 465
                    }
                  ],
                  "start": 448,
                  "end": 465
                },
                "start": 446,
                "end": 465
              },
              "accessibility": null,
              "static": false,
              "start": 437,
              "end": 465
            }
          ],
          "start": 401,
          "end": 467
        },
        "start": 399,
        "end": 467
      },
      "body": null,
      "expression": false,
      "start": 275,
      "end": 468
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
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 476,
            "end": 480
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classWithProperties",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 502
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "get",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 514
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
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "Literal",
                                "value": "boolean",
                                "raw": "'boolean'",
                                "start": 526,
                                "end": 535
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "const",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 539,
                                  "end": 544
                                },
                                "typeArguments": null,
                                "start": 539,
                                "end": 544
                              },
                              "start": 526,
                              "end": 544
                            },
                            "start": 519,
                            "end": 544
                          }
                        ],
                        "start": 517,
                        "end": 546
                      },
                      "expression": false,
                      "start": 514,
                      "end": 546
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 509,
                    "end": 546
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 553
                    },
                    "value": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 555,
                      "end": 563
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 552,
                    "end": 563
                  }
                ],
                "start": 503,
                "end": 566
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 578
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 579,
                  "end": 582
                },
                "abstract": false,
                "declare": false,
                "start": 568,
                "end": 582
              }
            ],
            "optional": false,
            "start": 483,
            "end": 583
          },
          "definite": false,
          "start": 476,
          "end": 583
        }
      ],
      "declare": false,
      "start": 470,
      "end": 584
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 599
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 608,
        "end": 612
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 624
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
                      "value": false,
                      "raw": "false",
                      "start": 644,
                      "end": 649
                    },
                    "start": 637,
                    "end": 650
                  }
                ],
                "start": 627,
                "end": 656
              },
              "expression": false,
              "start": 624,
              "end": 656
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 619,
            "end": 656
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 666
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
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 686,
                      "end": 690
                    },
                    "start": 679,
                    "end": 690
                  }
                ],
                "start": 669,
                "end": 696
              },
              "expression": false,
              "start": 666,
              "end": 696
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 661,
            "end": 696
          }
        ],
        "start": 613,
        "end": 698
      },
      "abstract": false,
      "declare": false,
      "start": 586,
      "end": 698
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
            "name": "mine",
            "optional": false,
            "typeAnnotation": null,
            "start": 706,
            "end": 710
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 724
            },
            "typeArguments": null,
            "arguments": [],
            "start": 713,
            "end": 726
          },
          "definite": false,
          "start": 706,
          "end": 726
        }
      ],
      "declare": false,
      "start": 700,
      "end": 727
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
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 739
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mine",
              "optional": false,
              "typeAnnotation": null,
              "start": 742,
              "end": 746
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 748
            },
            "optional": false,
            "computed": false,
            "start": 742,
            "end": 748
          },
          "definite": false,
          "start": 734,
          "end": 748
        }
      ],
      "declare": false,
      "start": 728,
      "end": 749
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 750
}
```
