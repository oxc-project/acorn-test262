__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 517,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 72,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 72,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 36,
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 70,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
              "decorators": [],
              "name": "__property2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 157,
            "decorators": [],
            "name": "ok",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 157,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 157,
                  "decorators": [],
                  "name": "Properties",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 160,
            "end": 202,
            "properties": [
              {
                "type": "Property",
                "start": 166,
                "end": 179,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 175,
                  "decorators": [],
                  "name": "property1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 177,
                  "end": 179,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 185,
                "end": 200,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 196,
                  "decorators": [],
                  "name": "__property2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 198,
                  "end": 200,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 263,
      "end": 292,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 272,
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 275,
        "end": 291,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 281,
          "end": 291,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 281,
            "end": 291,
            "decorators": [],
            "name": "Properties",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 322,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 306,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 300,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 302,
                "end": 306,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 306,
                  "decorators": [],
                  "name": "Keys",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 309,
            "end": 322,
            "raw": "\"__property2\"",
            "value": "__property2"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 355,
      "end": 402,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 360,
        "end": 373,
        "decorators": [],
        "name": "Property2Type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 376,
        "end": 401,
        "indexType": {
          "type": "TSLiteralType",
          "start": 387,
          "end": 400,
          "literal": {
            "type": "Literal",
            "start": 387,
            "end": 400,
            "raw": "\"__property2\"",
            "value": "__property2"
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 376,
          "end": 386,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 376,
            "end": 386,
            "decorators": [],
            "name": "Properties",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 436,
      "end": 516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 515,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 470,
            "decorators": [],
            "name": "partial",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 449,
              "end": 470,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 451,
                "end": 470,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 458,
                  "end": 470,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 459,
                      "end": 469,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 469,
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 458,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 473,
            "end": 515,
            "properties": [
              {
                "type": "Property",
                "start": 479,
                "end": 492,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 488,
                  "decorators": [],
                  "name": "property1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 490,
                  "end": 492,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 498,
                "end": 513,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 509,
                  "decorators": [],
                  "name": "__property2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 511,
                  "end": 513,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
