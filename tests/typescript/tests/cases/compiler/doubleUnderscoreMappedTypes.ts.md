__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 516,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 72,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 36,
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 70,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
              "decorators": [],
              "name": "__property2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 203,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 202,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 157,
                  "decorators": [],
                  "name": "Properties",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 175,
                  "decorators": [],
                  "name": "property1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 177,
                  "end": 179,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 185,
                "end": 200,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 196,
                  "decorators": [],
                  "name": "__property2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 198,
                  "end": 200,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 263,
      "end": 292,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 272,
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 275,
        "end": 291,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 281,
          "end": 291,
          "typeName": {
            "type": "Identifier",
            "start": 281,
            "end": 291,
            "decorators": [],
            "name": "Properties",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 323,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 322,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 306,
                  "decorators": [],
                  "name": "Keys",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 309,
            "end": 322,
            "value": "__property2",
            "raw": "\"__property2\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 355,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 360,
        "end": 373,
        "decorators": [],
        "name": "Property2Type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 376,
        "end": 401,
        "objectType": {
          "type": "TSTypeReference",
          "start": 376,
          "end": 386,
          "typeName": {
            "type": "Identifier",
            "start": 376,
            "end": 386,
            "decorators": [],
            "name": "Properties",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 387,
          "end": 400,
          "literal": {
            "type": "Literal",
            "start": 387,
            "end": 400,
            "value": "__property2",
            "raw": "\"__property2\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 436,
      "end": 516,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 515,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 458,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 458,
                  "end": 470,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 459,
                      "end": 469,
                      "typeName": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 469,
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 488,
                  "decorators": [],
                  "name": "property1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 490,
                  "end": 492,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 498,
                "end": 513,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 509,
                  "decorators": [],
                  "name": "__property2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 511,
                  "end": 513,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
