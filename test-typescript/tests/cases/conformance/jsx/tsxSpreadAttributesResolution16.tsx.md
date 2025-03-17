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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 58,
        "name": "ComponentProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 108,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 65,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 74,
              "name": "property1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 106,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 97,
              "name": "property2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 99,
                "end": 105
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
      "type": "ExportDefaultDeclaration",
      "start": 110,
      "end": 265,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 125,
        "end": 265,
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 143,
          "name": "Component",
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
            "start": 144,
            "end": 165,
            "name": "props",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 165,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 151,
                "end": 165,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 165,
                  "name": "ComponentProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                },
                "closingElement": null,
                "children": []
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "exportKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 267,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 298,
        "name": "AnotherComponentProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 299,
        "end": 379,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 305,
            "end": 323,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 314,
              "name": "property1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 322,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 316,
                "end": 322
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 328,
            "end": 353,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 344,
              "name": "AnotherProperty1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 352,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 346,
                "end": 352
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 358,
            "end": 377,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 367,
              "name": "property2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 376,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 369,
                "end": 376
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
      "type": "FunctionDeclaration",
      "start": 381,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 406,
        "name": "AnotherComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 407,
          "end": 443,
          "properties": [
            {
              "type": "Property",
              "start": 409,
              "end": 418,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 409,
                "end": 418,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 409,
                "end": 418,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 420,
            "end": 443,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 422,
              "end": 443,
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 443,
                "name": "AnotherComponentProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
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
              },
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
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 474,
                  "end": 485,
                  "expression": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 484,
                    "name": "property1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
