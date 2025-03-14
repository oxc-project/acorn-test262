file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 497,
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
        "optional": false
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 74,
              "decorators": [],
              "name": "property1",
              "optional": false
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 97,
              "decorators": [],
              "name": "property2",
              "optional": false
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
        "optional": false
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 110,
      "end": 261,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 125,
        "end": 261,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 167,
          "end": 261,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 173,
              "end": 259,
              "argument": {
                "type": "JSXElement",
                "start": 190,
                "end": 252,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 190,
                  "end": 252,
                  "attributes": [
                    {
                      "type": "JSXSpreadAttribute",
                      "start": 208,
                      "end": 218,
                      "argument": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 217,
                        "decorators": [],
                        "name": "props",
                        "optional": false
                      }
                    },
                    {
                      "type": "JSXAttribute",
                      "start": 219,
                      "end": 228,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 219,
                        "end": 228,
                        "name": "property2"
                      },
                      "value": null
                    },
                    {
                      "type": "JSXAttribute",
                      "start": 229,
                      "end": 250,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 229,
                        "end": 245,
                        "name": "AnotherProperty1"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 246,
                        "end": 250,
                        "raw": "\"hi\"",
                        "value": "hi"
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 191,
                    "end": 207,
                    "name": "AnotherComponent"
                  },
                  "selfClosing": true
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
          "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 165,
                  "decorators": [],
                  "name": "ComponentProps",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "exportKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 263,
      "end": 375,
      "body": {
        "type": "TSInterfaceBody",
        "start": 295,
        "end": 375,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 301,
            "end": 319,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 301,
              "end": 310,
              "decorators": [],
              "name": "property1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 318,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 312,
                "end": 318
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 324,
            "end": 349,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 340,
              "decorators": [],
              "name": "AnotherProperty1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 348,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 354,
            "end": 373,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 363,
              "decorators": [],
              "name": "property2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 363,
              "end": 372,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 365,
                "end": 372
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 294,
        "decorators": [],
        "name": "AnotherComponentProps",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 377,
      "end": 497,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 441,
        "end": 497,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 447,
            "end": 495,
            "argument": {
              "type": "JSXElement",
              "start": 464,
              "end": 488,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 470,
                  "end": 481,
                  "expression": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 480,
                    "decorators": [],
                    "name": "property1",
                    "optional": false
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 481,
                "end": 488,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 483,
                  "end": 487,
                  "name": "span"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 464,
                "end": 470,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 465,
                  "end": 469,
                  "name": "span"
                },
                "selfClosing": false
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
        "start": 386,
        "end": 402,
        "decorators": [],
        "name": "AnotherComponent",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 403,
          "end": 439,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 405,
              "end": 414,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 405,
                "end": 414,
                "decorators": [],
                "name": "property1",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 405,
                "end": 414,
                "decorators": [],
                "name": "property1",
                "optional": false
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 416,
            "end": 439,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 418,
              "end": 439,
              "typeName": {
                "type": "Identifier",
                "start": 418,
                "end": 439,
                "decorators": [],
                "name": "AnotherComponentProps",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
