__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 453,
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
      "end": 271,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 125,
        "end": 271,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 167,
          "end": 271,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 173,
              "end": 269,
              "argument": {
                "type": "JSXElement",
                "start": 222,
                "end": 262,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 222,
                  "end": 262,
                  "attributes": [
                    {
                      "type": "JSXSpreadAttribute",
                      "start": 240,
                      "end": 250,
                      "argument": {
                        "type": "Identifier",
                        "start": 244,
                        "end": 249,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "JSXAttribute",
                      "start": 251,
                      "end": 260,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 251,
                        "end": 260,
                        "name": "Property1"
                      },
                      "value": null
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 223,
                    "end": 239,
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
      "start": 273,
      "end": 331,
      "body": {
        "type": "TSInterfaceBody",
        "start": 305,
        "end": 331,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 311,
            "end": 329,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 320,
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
              "start": 320,
              "end": 328,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 322,
                "end": 328
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 304,
        "decorators": [],
        "name": "AnotherComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 333,
      "end": 453,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 397,
        "end": 453,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 403,
            "end": 451,
            "argument": {
              "type": "JSXElement",
              "start": 420,
              "end": 444,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 426,
                  "end": 437,
                  "expression": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 436,
                    "decorators": [],
                    "name": "property1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 437,
                "end": 444,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 439,
                  "end": 443,
                  "name": "span"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 420,
                "end": 426,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 421,
                  "end": 425,
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
        "start": 342,
        "end": 358,
        "decorators": [],
        "name": "AnotherComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 359,
          "end": 395,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 361,
              "end": 370,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 361,
                "end": 370,
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
                "start": 361,
                "end": 370,
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 372,
            "end": 395,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 374,
              "end": 395,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 395,
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
