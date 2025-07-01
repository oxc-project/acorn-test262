__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Address",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 51
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
              "name": "street",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "accessibility": null,
            "static": false,
            "start": 56,
            "end": 71
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "country",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 90
          }
        ],
        "start": 52,
        "end": 92
      },
      "declare": false,
      "start": 34,
      "end": 92
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CanadianAddress",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 119
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Address",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 135
          },
          "typeArguments": null,
          "start": 128,
          "end": 135
        }
      ],
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
              "name": "postalCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 142,
            "end": 161
          }
        ],
        "start": 136,
        "end": 163
      },
      "declare": false,
      "start": 94,
      "end": 163
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmericanAddress",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 190
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Address",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 206
          },
          "typeArguments": null,
          "start": 199,
          "end": 206
        }
      ],
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
              "name": "zipCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 220
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 222,
                "end": 228
              },
              "start": 220,
              "end": 228
            },
            "accessibility": null,
            "static": false,
            "start": 213,
            "end": 229
          }
        ],
        "start": 207,
        "end": 231
      },
      "declare": false,
      "start": 165,
      "end": 231
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 248
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanadianAddress",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 266
            },
            "typeArguments": null,
            "start": 251,
            "end": 266
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AmericanAddress",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 284
            },
            "typeArguments": null,
            "start": 269,
            "end": 284
          }
        ],
        "start": 251,
        "end": 284
      },
      "declare": false,
      "start": 233,
      "end": 285
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddressComp",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 311
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 325
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 335
          },
          "optional": false,
          "computed": false,
          "start": 320,
          "end": 335
        },
        "superTypeArguments": {
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
                "start": 336,
                "end": 346
              },
              "typeArguments": null,
              "start": 336,
              "end": 346
            },
            {
              "type": "TSVoidKeyword",
              "start": 348,
              "end": 352
            }
          ],
          "start": 335,
          "end": 353
        },
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
                "name": "render",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 371
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
                        "value": null,
                        "raw": "null",
                        "start": 387,
                        "end": 391
                      },
                      "start": 380,
                      "end": 392
                    }
                  ],
                  "start": 374,
                  "end": 396
                },
                "expression": false,
                "start": 371,
                "end": 396
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 358,
              "end": 396
            }
          ],
          "start": 354,
          "end": 398
        },
        "abstract": false,
        "declare": false,
        "start": 294,
        "end": 398
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 287,
      "end": 398
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 405
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "AddressComp",
                "start": 409,
                "end": 420
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "postalCode",
                    "start": 421,
                    "end": 431
                  },
                  "value": {
                    "type": "Literal",
                    "value": "T1B 0L3",
                    "raw": "'T1B 0L3'",
                    "start": 432,
                    "end": 441
                  },
                  "start": 421,
                  "end": 441
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "street",
                    "start": 442,
                    "end": 448
                  },
                  "value": {
                    "type": "Literal",
                    "value": "vancouver",
                    "raw": "\"vancouver\"",
                    "start": 449,
                    "end": 460
                  },
                  "start": 442,
                  "end": 460
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "country",
                    "start": 461,
                    "end": 468
                  },
                  "value": {
                    "type": "Literal",
                    "value": "CA",
                    "raw": "\"CA\"",
                    "start": 469,
                    "end": 473
                  },
                  "start": 461,
                  "end": 473
                }
              ],
              "selfClosing": true,
              "start": 408,
              "end": 476
            },
            "children": [],
            "closingElement": null,
            "start": 408,
            "end": 476
          },
          "definite": false,
          "start": 404,
          "end": 476
        }
      ],
      "declare": false,
      "start": 400,
      "end": 476
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 476
}
```
