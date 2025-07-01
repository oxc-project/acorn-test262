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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 23
          }
        ],
        "start": 12,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 47
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 51,
              "end": 58
            },
            "start": 49,
            "end": 58
          },
          "start": 48,
          "end": 58
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "asserts": false,
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
                "start": 66,
                "end": 67
              },
              "typeArguments": null,
              "start": 66,
              "end": 67
            },
            "start": 66,
            "end": 67
          },
          "start": 61,
          "end": 67
        },
        "start": 59,
        "end": 67
      },
      "body": null,
      "expression": false,
      "start": 27,
      "end": 68
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionsObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 87
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
              "start": 88,
              "end": 89
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 88,
            "end": 89
          }
        ],
        "start": 87,
        "end": 90
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 101
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
              "start": 111,
              "end": 112
            },
            "typeArguments": null,
            "start": 111,
            "end": 112
          },
          "start": 105,
          "end": 112
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 121,
              "end": 128
            },
            "start": 118,
            "end": 128
          },
          "start": 115,
          "end": 128
        },
        "optional": false,
        "readonly": null,
        "start": 93,
        "end": 130
      },
      "declare": false,
      "start": 70,
      "end": 130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 142
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 149
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionsObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 170
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
                      "start": 171,
                      "end": 172
                    },
                    "typeArguments": null,
                    "start": 171,
                    "end": 172
                  }
                ],
                "start": 170,
                "end": 173
              },
              "start": 158,
              "end": 173
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 148,
            "end": 173
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
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
                  "start": 195,
                  "end": 196
                },
                "typeArguments": null,
                "start": 195,
                "end": 196
              },
              "start": 189,
              "end": 196
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 179,
            "end": 196
          }
        ],
        "start": 142,
        "end": 198
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 213
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 214,
                        "end": 215
                      },
                      "typeArguments": null,
                      "start": 214,
                      "end": 215
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 217
                      },
                      "typeArguments": null,
                      "start": 216,
                      "end": 217
                    },
                    "start": 214,
                    "end": 218
                  }
                ],
                "start": 213,
                "end": 219
              },
              "start": 203,
              "end": 219
            },
            "start": 201,
            "end": 219
          },
          "start": 199,
          "end": 219
        },
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 225
              },
              "typeArguments": null,
              "start": 224,
              "end": 225
            },
            "start": 222,
            "end": 225
          },
          "start": 221,
          "end": 225
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 234
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 239
              },
              "start": 233,
              "end": 239
            },
            "directive": null,
            "start": 233,
            "end": 240
          }
        ],
        "start": 227,
        "end": 242
      },
      "expression": false,
      "start": 132,
      "end": 242
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 298
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 305
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionsObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 326
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
                      "start": 327,
                      "end": 328
                    },
                    "typeArguments": null,
                    "start": 327,
                    "end": 328
                  }
                ],
                "start": 326,
                "end": 329
              },
              "start": 314,
              "end": 329
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 304,
            "end": 329
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
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
                  "start": 351,
                  "end": 352
                },
                "typeArguments": null,
                "start": 351,
                "end": 352
              },
              "start": 345,
              "end": 352
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 335,
            "end": 352
          }
        ],
        "start": 298,
        "end": 354
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 369
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 370,
                        "end": 371
                      },
                      "typeArguments": null,
                      "start": 370,
                      "end": 371
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 372,
                        "end": 373
                      },
                      "typeArguments": null,
                      "start": 372,
                      "end": 373
                    },
                    "start": 370,
                    "end": 374
                  }
                ],
                "start": 369,
                "end": 375
              },
              "start": 359,
              "end": 375
            },
            "start": 357,
            "end": 375
          },
          "start": 355,
          "end": 375
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 390
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 393
                }
              ],
              "optional": false,
              "start": 387,
              "end": 394
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 438
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 440
                    },
                    "optional": false,
                    "computed": false,
                    "start": 436,
                    "end": 440
                  },
                  "directive": null,
                  "start": 436,
                  "end": 440
                }
              ],
              "start": 396,
              "end": 473
            },
            "alternate": null,
            "start": 383,
            "end": 473
          }
        ],
        "start": 377,
        "end": 475
      },
      "expression": false,
      "start": 287,
      "end": 475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 475
}
```
