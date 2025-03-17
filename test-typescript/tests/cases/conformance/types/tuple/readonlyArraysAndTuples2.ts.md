__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 457,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "T13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "ReadonlyArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "T20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "T21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 200,
          "end": 212,
          "name": "ma",
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 214,
          "end": 235,
          "name": "ra",
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 237,
          "end": 257,
          "name": "mt",
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 259,
          "end": 288,
          "name": "rt",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 345,
            "name": "someDec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 345,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 342,
                "end": 345
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 348,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 354,
        "end": 355,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 456,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 360,
            "end": 397,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrayExpression",
              "start": 394,
              "end": 396,
              "elements": []
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 360,
                "end": 368,
                "expression": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 368,
                  "name": "someDec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 400,
            "end": 454,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "decorators": [
              {
                "type": "Decorator",
                "start": 400,
                "end": 408,
                "expression": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 408,
                  "name": "someDec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
