__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 564,
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
      "end": 384,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 125,
        "end": 384,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 167,
          "end": 384,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 173,
              "end": 197,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 177,
                  "end": 196,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 196,
                    "decorators": [],
                    "name": "condition1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 187,
                      "end": 196,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 189,
                        "end": 196
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "IfStatement",
              "start": 202,
              "end": 382,
              "alternate": {
                "type": "BlockStatement",
                "start": 305,
                "end": 382,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 315,
                    "end": 376,
                    "argument": {
                      "type": "JSXElement",
                      "start": 323,
                      "end": 374,
                      "children": [],
                      "closingElement": null,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 323,
                        "end": 374,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 339,
                            "end": 349,
                            "argument": {
                              "type": "Identifier",
                              "start": 343,
                              "end": 348,
                              "decorators": [],
                              "name": "props",
                              "optional": false
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 350,
                            "end": 371,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 350,
                              "end": 359,
                              "name": "property1"
                            },
                            "value": {
                              "type": "Literal",
                              "start": 360,
                              "end": 371,
                              "raw": "\"NewString\"",
                              "value": "NewString"
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 324,
                          "end": 338,
                          "name": "ChildComponent"
                        },
                        "selfClosing": true
                      }
                    }
                  }
                ]
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 218,
                "end": 295,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 228,
                    "end": 289,
                    "argument": {
                      "type": "JSXElement",
                      "start": 249,
                      "end": 278,
                      "children": [],
                      "closingElement": null,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 249,
                        "end": 278,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 265,
                            "end": 275,
                            "argument": {
                              "type": "Identifier",
                              "start": 269,
                              "end": 274,
                              "decorators": [],
                              "name": "props",
                              "optional": false
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 250,
                          "end": 264,
                          "name": "ChildComponent"
                        },
                        "selfClosing": true
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 206,
                "end": 216,
                "decorators": [],
                "name": "condition1",
                "optional": false
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
      "start": 386,
      "end": 444,
      "body": {
        "type": "TSInterfaceBody",
        "start": 418,
        "end": 444,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 424,
            "end": 442,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 424,
              "end": 433,
              "decorators": [],
              "name": "property1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 441,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 435,
                "end": 441
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 417,
        "decorators": [],
        "name": "AnotherComponentProps",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 446,
      "end": 564,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 508,
        "end": 564,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 514,
            "end": 562,
            "argument": {
              "type": "JSXElement",
              "start": 531,
              "end": 555,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 537,
                  "end": 548,
                  "expression": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 547,
                    "decorators": [],
                    "name": "property1",
                    "optional": false
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 548,
                "end": 555,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 550,
                  "end": 554,
                  "name": "span"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 531,
                "end": 537,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 532,
                  "end": 536,
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
        "start": 455,
        "end": 469,
        "decorators": [],
        "name": "ChildComponent",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 470,
          "end": 506,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 472,
              "end": 481,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 472,
                "end": 481,
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
                "start": 472,
                "end": 481,
                "decorators": [],
                "name": "property1",
                "optional": false
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 483,
            "end": 506,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 485,
              "end": 506,
              "typeName": {
                "type": "Identifier",
                "start": 485,
                "end": 506,
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
  "sourceType": "script",
  "hashbang": null
}
```
