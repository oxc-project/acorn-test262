__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 501,
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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 108,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 65,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 74,
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
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 97,
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 99,
                "end": 105
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 58,
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 110,
      "end": 265,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 125,
        "end": 265,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 167,
          "end": 265,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 173,
              "end": 263,
              "argument": {
                "type": "JSXElement",
                "start": 225,
                "end": 256,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 225,
                  "end": 256,
                  "attributes": [
                    {
                      "type": "JSXSpreadAttribute",
                      "start": 243,
                      "end": 253,
                      "argument": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 252,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 226,
                    "end": 242,
                    "name": "AnotherComponent"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 143,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 144,
            "end": 165,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 165,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 151,
                "end": 165,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 165,
                  "decorators": [],
                  "name": "ComponentProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 267,
      "end": 379,
      "body": {
        "type": "TSInterfaceBody",
        "start": 299,
        "end": 379,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 305,
            "end": 323,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 314,
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
              "start": 314,
              "end": 322,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 316,
                "end": 322
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 328,
            "end": 353,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 344,
              "decorators": [],
              "name": "AnotherProperty1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 352,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 346,
                "end": 352
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 358,
            "end": 377,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 367,
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 376,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 369,
                "end": 376
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 298,
        "decorators": [],
        "name": "AnotherComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 381,
      "end": 501,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 445,
        "end": 501,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 451,
            "end": 499,
            "argument": {
              "type": "JSXElement",
              "start": 468,
              "end": 492,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 474,
                  "end": 485,
                  "expression": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 484,
                    "decorators": [],
                    "name": "property1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 485,
                "end": 492,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 487,
                  "end": 491,
                  "name": "span"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 468,
                "end": 474,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 469,
                  "end": 473,
                  "name": "span"
                },
                "selfClosing": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 406,
        "decorators": [],
        "name": "AnotherComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 407,
          "end": 443,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 409,
              "end": 418,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 409,
                "end": 418,
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 409,
                "end": 418,
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 420,
            "end": 443,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 422,
              "end": 443,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 443,
                "decorators": [],
                "name": "AnotherComponentProps",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
