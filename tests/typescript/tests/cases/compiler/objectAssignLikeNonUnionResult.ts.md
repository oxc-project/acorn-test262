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
        "name": "Interface",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
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
              "name": "field",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              },
              "start": 31,
              "end": 39
            },
            "accessibility": null,
            "static": false,
            "start": 26,
            "end": 40
          }
        ],
        "start": 20,
        "end": 42
      },
      "declare": false,
      "start": 0,
      "end": 42
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
            "name": "defaultValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Interface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 72
                },
                "typeArguments": null,
                "start": 63,
                "end": 72
              },
              "start": 61,
              "end": 72
            },
            "start": 49,
            "end": 72
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
                  "name": "field",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 82
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 84,
                  "end": 85
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 77,
                "end": 85
              }
            ],
            "start": 75,
            "end": 87
          },
          "definite": false,
          "start": 49,
          "end": 87
        }
      ],
      "declare": false,
      "start": 43,
      "end": 88
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assign",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 113
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
              "start": 114,
              "end": 115
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 115
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 117,
            "end": 118
          }
        ],
        "start": 113,
        "end": 119
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
                "start": 128,
                "end": 129
              },
              "typeArguments": null,
              "start": 128,
              "end": 129
            },
            "start": 126,
            "end": 129
          },
          "start": 120,
          "end": 129
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "typeArguments": null,
              "start": 139,
              "end": 140
            },
            "start": 137,
            "end": 140
          },
          "start": 131,
          "end": 140
        }
      ],
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 144
              },
              "typeArguments": null,
              "start": 143,
              "end": 144
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 148
              },
              "typeArguments": null,
              "start": 147,
              "end": 148
            }
          ],
          "start": 143,
          "end": 148
        },
        "start": 141,
        "end": 148
      },
      "body": null,
      "expression": false,
      "start": 90,
      "end": 149
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
            "name": "data1",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 249
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "assign",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 258
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 271
              },
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 273,
                        "end": 277
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "now",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 278,
                        "end": 281
                      },
                      "optional": false,
                      "computed": false,
                      "start": 273,
                      "end": 281
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 273,
                    "end": 283
                  },
                  "operator": ">",
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 286,
                    "end": 287
                  },
                  "start": 273,
                  "end": 287
                },
                "consequent": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "field",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 297
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 299,
                        "end": 300
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 292,
                      "end": 300
                    }
                  ],
                  "start": 290,
                  "end": 302
                },
                "alternate": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 305,
                  "end": 307
                },
                "start": 273,
                "end": 307
              }
            ],
            "optional": false,
            "start": 252,
            "end": 308
          },
          "definite": false,
          "start": 244,
          "end": 308
        }
      ],
      "declare": false,
      "start": 238,
      "end": 309
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractRawComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 335
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
              "start": 336,
              "end": 337
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 336,
            "end": 337
          }
        ],
        "start": 335,
        "end": 338
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
            "start": 341,
            "end": 342
          },
          "typeArguments": null,
          "start": 341,
          "end": 342
        },
        "extendsType": {
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
                "name": "__raw",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 358
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
                      "start": 366,
                      "end": 367
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 366,
                    "end": 367
                  },
                  "start": 360,
                  "end": 367
                },
                "start": 358,
                "end": 367
              },
              "accessibility": null,
              "static": false,
              "start": 353,
              "end": 367
            }
          ],
          "start": 351,
          "end": 369
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "L1",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 375
              },
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 378
                },
                "typeArguments": null,
                "start": 377,
                "end": 378
              },
              "optional": false,
              "start": 373,
              "end": 378
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "L2",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 382
              },
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 385
                },
                "typeArguments": null,
                "start": 384,
                "end": 385
              },
              "optional": false,
              "start": 380,
              "end": 385
            }
          ],
          "start": 372,
          "end": 386
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "R1",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 392
              },
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 395
                },
                "typeArguments": null,
                "start": 394,
                "end": 395
              },
              "optional": false,
              "start": 390,
              "end": 395
            }
          ],
          "start": 389,
          "end": 396
        },
        "start": 341,
        "end": 396
      },
      "declare": false,
      "start": 311,
      "end": 397
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 405
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtractRawComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 427
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "data1",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 440
              },
              "typeArguments": null,
              "start": 428,
              "end": 440
            }
          ],
          "start": 427,
          "end": 441
        },
        "start": 408,
        "end": 441
      },
      "declare": false,
      "start": 398,
      "end": 442
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Explode",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 463
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
              "start": 464,
              "end": 465
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 464,
            "end": 465
          }
        ],
        "start": 463,
        "end": 466
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
            "start": 469,
            "end": 470
          },
          "typeArguments": null,
          "start": 469,
          "end": 470
        },
        "extendsType": {
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
                "start": 481,
                "end": 482
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 490,
                      "end": 491
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 490,
                    "end": 491
                  },
                  "start": 484,
                  "end": 491
                },
                "start": 482,
                "end": 491
              },
              "accessibility": null,
              "static": false,
              "start": 481,
              "end": 491
            }
          ],
          "start": 479,
          "end": 493
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 498
              },
              "typeArguments": null,
              "start": 497,
              "end": 498
            }
          ],
          "start": 496,
          "end": 499
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "X",
            "raw": "'X'",
            "start": 502,
            "end": 505
          },
          "start": 502,
          "end": 505
        },
        "start": 469,
        "end": 505
      },
      "declare": false,
      "start": 451,
      "end": 506
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 539,
        "end": 541
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Explode",
          "optional": false,
          "typeAnnotation": null,
          "start": 544,
          "end": 551
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "data1",
                "optional": false,
                "typeAnnotation": null,
                "start": 559,
                "end": 564
              },
              "typeArguments": null,
              "start": 552,
              "end": 564
            }
          ],
          "start": 551,
          "end": 565
        },
        "start": 544,
        "end": 565
      },
      "declare": false,
      "start": 534,
      "end": 566
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 566
}
```
