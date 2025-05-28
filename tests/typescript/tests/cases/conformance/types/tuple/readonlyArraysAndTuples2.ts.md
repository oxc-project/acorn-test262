__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 456,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 11,
        "end": 19,
        "elementType": {
          "type": "TSStringKeyword",
          "start": 11,
          "end": 17
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 21,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 32,
        "end": 45,
        "typeName": {
          "type": "Identifier",
          "start": 32,
          "end": 37,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 37,
          "end": 45,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 38,
              "end": 44
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 47,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 58,
        "end": 75,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 67,
          "end": 75,
          "elementType": {
            "type": "TSStringKeyword",
            "start": 67,
            "end": 73
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 88,
        "end": 109,
        "typeName": {
          "type": "Identifier",
          "start": 88,
          "end": 101,
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 101,
          "end": 109,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 102,
              "end": 108
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 112,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 120,
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 123,
        "end": 139,
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
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 141,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 149,
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 152,
        "end": 177,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 161,
          "end": 177,
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
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 180,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 200,
          "end": 212,
          "decorators": [],
          "name": "ma",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 202,
            "end": 212,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 204,
              "end": 212,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 204,
                "end": 210
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 214,
          "end": 235,
          "decorators": [],
          "name": "ra",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 216,
            "end": 235,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 218,
              "end": 235,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 227,
                "end": 235,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 227,
                  "end": 233
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 237,
          "end": 257,
          "decorators": [],
          "name": "mt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 239,
            "end": 257,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 241,
              "end": 257,
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
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 259,
          "end": 288,
          "decorators": [],
          "name": "rt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 288,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 263,
              "end": 288,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 272,
                "end": 288,
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
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 289,
        "end": 316,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 291,
          "end": 316,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 300,
            "end": 316,
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
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 346,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 345,
            "decorators": [],
            "name": "someDec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 345,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 342,
                "end": 345
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 348,
      "end": 456,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 355,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 456,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 360,
            "end": 397,
            "decorators": [
              {
                "type": "Decorator",
                "start": 360,
                "end": 368,
                "expression": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 368,
                  "decorators": [],
                  "name": "someDec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 372,
              "end": 391,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 374,
                "end": 391,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 383,
                  "end": 391,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 383,
                    "end": 389
                  }
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "start": 394,
              "end": 396,
              "elements": []
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 400,
            "end": 454,
            "decorators": [
              {
                "type": "Decorator",
                "start": 400,
                "end": 408,
                "expression": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 408,
                  "decorators": [],
                  "name": "someDec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 412,
              "end": 439,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 414,
                "end": 439,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 423,
                  "end": 439,
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
                  ]
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "start": 442,
              "end": 453,
              "elements": [
                {
                  "type": "Literal",
                  "start": 443,
                  "end": 448,
                  "value": "foo",
                  "raw": "'foo'"
                },
                {
                  "type": "Literal",
                  "start": 450,
                  "end": 452,
                  "value": 42,
                  "raw": "42"
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
