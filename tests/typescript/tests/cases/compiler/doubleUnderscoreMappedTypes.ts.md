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
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 70
          }
        ],
        "start": 21,
        "end": 72
      },
      "declare": false,
      "start": 0,
      "end": 72
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
            "name": "ok",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Properties",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 157
                },
                "typeArguments": null,
                "start": 147,
                "end": 157
              },
              "start": 145,
              "end": 157
            },
            "start": 143,
            "end": 157
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
                  "name": "property1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 175
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 177,
                  "end": 179
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 166,
                "end": 179
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__property2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 196
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 198,
                  "end": 200
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 185,
                "end": 200
              }
            ],
            "start": 160,
            "end": 202
          },
          "definite": false,
          "start": 143,
          "end": 202
        }
      ],
      "declare": false,
      "start": 137,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 272
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Properties",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 291
          },
          "typeArguments": null,
          "start": 281,
          "end": 291
        },
        "start": 275,
        "end": 291
      },
      "declare": false,
      "start": 263,
      "end": 292
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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Keys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 306
                },
                "typeArguments": null,
                "start": 302,
                "end": 306
              },
              "start": 300,
              "end": 306
            },
            "start": 299,
            "end": 306
          },
          "init": {
            "type": "Literal",
            "value": "__property2",
            "raw": "\"__property2\"",
            "start": 309,
            "end": 322
          },
          "definite": false,
          "start": 299,
          "end": 322
        }
      ],
      "declare": false,
      "start": 293,
      "end": 323
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Property2Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 373
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Properties",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 386
          },
          "typeArguments": null,
          "start": 376,
          "end": 386
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "__property2",
            "raw": "\"__property2\"",
            "start": 387,
            "end": 400
          },
          "start": 387,
          "end": 400
        },
        "start": 376,
        "end": 401
      },
      "declare": false,
      "start": 355,
      "end": 402
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
                  "start": 451,
                  "end": 458
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 469
                      },
                      "typeArguments": null,
                      "start": 459,
                      "end": 469
                    }
                  ],
                  "start": 458,
                  "end": 470
                },
                "start": 451,
                "end": 470
              },
              "start": 449,
              "end": 470
            },
            "start": 442,
            "end": 470
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
                  "name": "property1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 488
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 490,
                  "end": 492
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 479,
                "end": 492
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__property2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 509
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 511,
                  "end": 513
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 498,
                "end": 513
              }
            ],
            "start": 473,
            "end": 515
          },
          "definite": false,
          "start": 442,
          "end": 515
        }
      ],
      "declare": false,
      "start": 436,
      "end": 516
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 516
}
```
