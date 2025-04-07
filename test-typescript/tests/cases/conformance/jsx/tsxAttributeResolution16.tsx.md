__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 501,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 25,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 55,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 59,
      "end": 117,
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 117,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 81,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 87,
              "decorators": [],
              "name": "street",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 99,
            "end": 115,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 106,
              "decorators": [],
              "name": "country",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 76,
        "decorators": [],
        "name": "Address",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 119,
      "end": 188,
      "body": {
        "type": "TSInterfaceBody",
        "start": 161,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 167,
            "end": 186,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 177,
              "decorators": [],
              "name": "postalCode",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 153,
          "end": 160,
          "expression": {
            "type": "Identifier",
            "start": 153,
            "end": 160,
            "decorators": [],
            "name": "Address",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 144,
        "decorators": [],
        "name": "CanadianAddress",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 190,
      "end": 256,
      "body": {
        "type": "TSInterfaceBody",
        "start": 232,
        "end": 256,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 238,
            "end": 254,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 245,
              "decorators": [],
              "name": "zipCode",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 253,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 247,
                "end": 253
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 224,
          "end": 231,
          "expression": {
            "type": "Identifier",
            "start": 224,
            "end": 231,
            "decorators": [],
            "name": "Address",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 215,
        "decorators": [],
        "name": "AmericanAddress",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 258,
      "end": 310,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 273,
        "decorators": [],
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 276,
        "end": 309,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 276,
            "end": 291,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 276,
              "end": 291,
              "decorators": [],
              "name": "CanadianAddress",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 294,
            "end": 309,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 294,
              "end": 309,
              "decorators": [],
              "name": "AmericanAddress",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 312,
      "end": 423,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 319,
        "end": 423,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 379,
          "end": 423,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 383,
              "end": 421,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 390,
                "end": 396,
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 396,
                "end": 421,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 399,
                  "end": 421,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 405,
                      "end": 417,
                      "argument": {
                        "type": "Literal",
                        "start": 412,
                        "end": 416,
                        "raw": "null",
                        "value": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 325,
          "end": 336,
          "decorators": [],
          "name": "AddressComp",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 345,
          "end": 360,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 345,
            "end": 350,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 351,
            "end": 360,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 360,
          "end": 378,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 361,
              "end": 371,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 361,
                "end": 371,
                "decorators": [],
                "name": "Properties",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSVoidKeyword",
              "start": 373,
              "end": 377
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 425,
      "end": 501,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 501,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 430,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 433,
            "end": 501,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 433,
              "end": 501,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 446,
                  "end": 466,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 446,
                    "end": 456,
                    "name": "postalCode"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 457,
                    "end": 466,
                    "raw": "'T1B 0L3'",
                    "value": "T1B 0L3"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 467,
                  "end": 485,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 467,
                    "end": 473,
                    "name": "street"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 474,
                    "end": 485,
                    "raw": "\"vancouver\"",
                    "value": "vancouver"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 486,
                  "end": 498,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 486,
                    "end": 493,
                    "name": "country"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 494,
                    "end": 498,
                    "raw": "\"CA\"",
                    "value": "CA"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 434,
                "end": 445,
                "name": "AddressComp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
