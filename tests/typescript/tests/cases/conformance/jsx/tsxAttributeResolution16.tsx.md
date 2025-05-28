__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 476,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 51,
        "decorators": [],
        "name": "Address",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 92,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 71,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "street",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 90,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 81,
              "decorators": [],
              "name": "country",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
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
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 119,
        "decorators": [],
        "name": "CanadianAddress",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 128,
          "end": 135,
          "expression": {
            "type": "Identifier",
            "start": 128,
            "end": 135,
            "decorators": [],
            "name": "Address",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 136,
        "end": 163,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 142,
            "end": 161,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 152,
              "decorators": [],
              "name": "postalCode",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
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
      "type": "TSInterfaceDeclaration",
      "start": 165,
      "end": 231,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 190,
        "decorators": [],
        "name": "AmericanAddress",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 199,
          "end": 206,
          "expression": {
            "type": "Identifier",
            "start": 199,
            "end": 206,
            "decorators": [],
            "name": "Address",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 207,
        "end": 231,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 213,
            "end": 229,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 220,
              "decorators": [],
              "name": "zipCode",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 228,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 222,
                "end": 228
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
      "type": "TSTypeAliasDeclaration",
      "start": 233,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 248,
        "decorators": [],
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 251,
        "end": 284,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 251,
            "end": 266,
            "typeName": {
              "type": "Identifier",
              "start": 251,
              "end": 266,
              "decorators": [],
              "name": "CanadianAddress",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 269,
            "end": 284,
            "typeName": {
              "type": "Identifier",
              "start": 269,
              "end": 284,
              "decorators": [],
              "name": "AmericanAddress",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 287,
      "end": 398,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 294,
        "end": 398,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 300,
          "end": 311,
          "decorators": [],
          "name": "AddressComp",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "start": 320,
          "end": 335,
          "object": {
            "type": "Identifier",
            "start": 320,
            "end": 325,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 326,
            "end": 335,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 335,
          "end": 353,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 336,
              "end": 346,
              "typeName": {
                "type": "Identifier",
                "start": 336,
                "end": 346,
                "decorators": [],
                "name": "Properties",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSVoidKeyword",
              "start": 348,
              "end": 352
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 354,
          "end": 398,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 358,
              "end": 396,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 365,
                "end": 371,
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 371,
                "end": 396,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 374,
                  "end": 396,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 380,
                      "end": 392,
                      "argument": {
                        "type": "Literal",
                        "start": 387,
                        "end": 391,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 400,
      "end": 476,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 404,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 408,
            "end": 476,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 408,
              "end": 476,
              "name": {
                "type": "JSXIdentifier",
                "start": 409,
                "end": 420,
                "name": "AddressComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 421,
                  "end": 441,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 421,
                    "end": 431,
                    "name": "postalCode"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 432,
                    "end": 441,
                    "value": "T1B 0L3",
                    "raw": "'T1B 0L3'"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 442,
                  "end": 460,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 442,
                    "end": 448,
                    "name": "street"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 449,
                    "end": 460,
                    "value": "vancouver",
                    "raw": "\"vancouver\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 461,
                  "end": 473,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 461,
                    "end": 468,
                    "name": "country"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 469,
                    "end": 473,
                    "value": "CA",
                    "raw": "\"CA\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
