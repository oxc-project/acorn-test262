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
      "end": 271,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 125,
        "end": 271,
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
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "start": 273,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 304,
        "name": "AnotherComponentProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 305,
        "end": 331,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 311,
            "end": 329,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 320,
              "name": "property1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 328,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 322,
                "end": 328
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
      "start": 333,
      "end": 453,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 358,
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
          "start": 359,
          "end": 395,
          "properties": [
            {
              "type": "Property",
              "start": 361,
              "end": 370,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 361,
                "end": 370,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 361,
                "end": 370,
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
            "start": 372,
            "end": 395,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 374,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 374,
                "end": 395,
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
              },
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
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 426,
                  "end": 437,
                  "expression": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 436,
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
