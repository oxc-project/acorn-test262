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
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSStringKeyword",
          "start": 11,
          "end": 17
        },
        "start": 11,
        "end": 19
      },
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 29
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 37
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 38,
              "end": 44
            }
          ],
          "start": 37,
          "end": 45
        },
        "start": 32,
        "end": 45
      },
      "declare": false,
      "start": 21,
      "end": 46
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 55
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 67,
            "end": 73
          },
          "start": 67,
          "end": 75
        },
        "start": 58,
        "end": 75
      },
      "declare": false,
      "start": 47,
      "end": 76
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 85
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 101
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 102,
              "end": 108
            }
          ],
          "start": 101,
          "end": 109
        },
        "start": 88,
        "end": 109
      },
      "declare": false,
      "start": 77,
      "end": 110
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 124,
            "end": 130
          },
          {
            "type": "TSNumberKeyword",
            "start": 132,
            "end": 138
          }
        ],
        "start": 123,
        "end": 139
      },
      "declare": false,
      "start": 112,
      "end": 140
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 149
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 162,
              "end": 168
            },
            {
              "type": "TSNumberKeyword",
              "start": 170,
              "end": 176
            }
          ],
          "start": 161,
          "end": 177
        },
        "start": 152,
        "end": 177
      },
      "declare": false,
      "start": 141,
      "end": 178
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 199
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ma",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 204,
                "end": 210
              },
              "start": 204,
              "end": 212
            },
            "start": 202,
            "end": 212
          },
          "start": 200,
          "end": 212
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ra",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 227,
                  "end": 233
                },
                "start": 227,
                "end": 235
              },
              "start": 218,
              "end": 235
            },
            "start": 216,
            "end": 235
          },
          "start": 214,
          "end": 235
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 242,
                  "end": 248
                },
                {
                  "type": "TSStringKeyword",
                  "start": 250,
                  "end": 256
                }
              ],
              "start": 241,
              "end": 257
            },
            "start": 239,
            "end": 257
          },
          "start": 237,
          "end": 257
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "rt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 273,
                    "end": 279
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 281,
                    "end": 287
                  }
                ],
                "start": 272,
                "end": 288
              },
              "start": 263,
              "end": 288
            },
            "start": 261,
            "end": 288
          },
          "start": 259,
          "end": 288
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 301,
                "end": 307
              },
              {
                "type": "TSStringKeyword",
                "start": 309,
                "end": 315
              }
            ],
            "start": 300,
            "end": 316
          },
          "start": 291,
          "end": 316
        },
        "start": 289,
        "end": 316
      },
      "body": null,
      "expression": false,
      "start": 180,
      "end": 317
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
            "name": "someDec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 342,
                "end": 345
              },
              "start": 340,
              "end": 345
            },
            "start": 333,
            "end": 345
          },
          "init": null,
          "definite": false,
          "start": 333,
          "end": 345
        }
      ],
      "declare": true,
      "start": 319,
      "end": 346
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 354,
        "end": 355
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someDec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 368
                },
                "start": 360,
                "end": 368
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 372
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 383,
                    "end": 389
                  },
                  "start": 383,
                  "end": 391
                },
                "start": 374,
                "end": 391
              },
              "start": 372,
              "end": 391
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 394,
              "end": 396
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 360,
            "end": 397
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someDec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 408
                },
                "start": 400,
                "end": 408
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 412
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 424,
                      "end": 430
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 432,
                      "end": 438
                    }
                  ],
                  "start": 423,
                  "end": 439
                },
                "start": 414,
                "end": 439
              },
              "start": 412,
              "end": 439
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 443,
                  "end": 448
                },
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 450,
                  "end": 452
                }
              ],
              "start": 442,
              "end": 453
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 400,
            "end": 454
          }
        ],
        "start": 356,
        "end": 456
      },
      "abstract": false,
      "declare": false,
      "start": 348,
      "end": 456
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 456
}
```
