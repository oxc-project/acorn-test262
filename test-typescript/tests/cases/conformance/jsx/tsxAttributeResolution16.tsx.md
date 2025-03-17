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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 55,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 59,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 76,
        "name": "Address",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 117,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 81,
            "end": 96,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 87,
              "name": "street",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 99,
            "end": 115,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 106,
              "name": "country",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
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
      "start": 119,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 144,
        "name": "CanadianAddress",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 153,
          "end": 160,
          "expression": {
            "type": "Identifier",
            "start": 153,
            "end": 160,
            "name": "Address",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 161,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 167,
            "end": 186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 177,
              "name": "postalCode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
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
      "start": 190,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 215,
        "name": "AmericanAddress",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 224,
          "end": 231,
          "expression": {
            "type": "Identifier",
            "start": 224,
            "end": 231,
            "name": "Address",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 232,
        "end": 256,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 238,
            "end": 254,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 245,
              "name": "zipCode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 253,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 247,
                "end": 253
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
      "start": 258,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 273,
        "name": "Properties",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 276,
        "end": 309,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 276,
            "end": 291,
            "typeName": {
              "type": "Identifier",
              "start": 276,
              "end": 291,
              "name": "CanadianAddress",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 294,
            "end": 309,
            "typeName": {
              "type": "Identifier",
              "start": 294,
              "end": 309,
              "name": "AmericanAddress",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 312,
      "end": 423,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 319,
        "end": 423,
        "id": {
          "type": "Identifier",
          "start": 325,
          "end": 336,
          "name": "AddressComp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 345,
          "end": 360,
          "object": {
            "type": "Identifier",
            "start": 345,
            "end": 350,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 351,
            "end": 360,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 379,
          "end": 423,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 383,
              "end": 421,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 390,
                "end": 396,
                "name": "render",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 396,
                "end": 421,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 360,
          "end": 378,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 361,
              "end": 371,
              "typeName": {
                "type": "Identifier",
                "start": 361,
                "end": 371,
                "name": "Properties",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSVoidKeyword",
              "start": 373,
              "end": 377
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 430,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 433,
            "end": 501,
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
                    "value": "T1B 0L3",
                    "raw": "'T1B 0L3'"
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
                    "value": "vancouver",
                    "raw": "\"vancouver\""
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
                    "value": "CA",
                    "raw": "\"CA\""
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
