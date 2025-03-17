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
      "end": 384,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 125,
        "end": 384,
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
                  "id": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 196,
                    "name": "condition1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 187,
                      "end": 196,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 189,
                        "end": 196
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "IfStatement",
              "start": 202,
              "end": 382,
              "test": {
                "type": "Identifier",
                "start": 206,
                "end": 216,
                "name": "condition1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                              "name": "props",
                              "typeAnnotation": null,
                              "decorators": [],
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
                        "selfClosing": true,
                        "typeArguments": null
                      },
                      "closingElement": null,
                      "children": []
                    }
                  }
                ]
              },
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
                              "name": "props",
                              "typeAnnotation": null,
                              "decorators": [],
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
                              "value": "NewString",
                              "raw": "\"NewString\""
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 324,
                          "end": 338,
                          "name": "ChildComponent"
                        },
                        "selfClosing": true,
                        "typeArguments": null
                      },
                      "closingElement": null,
                      "children": []
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
      },
      "exportKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 386,
      "end": 444,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 417,
        "name": "AnotherComponentProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 424,
              "end": 433,
              "name": "property1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 441,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 435,
                "end": 441
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
      "start": 446,
      "end": 564,
      "id": {
        "type": "Identifier",
        "start": 455,
        "end": 469,
        "name": "ChildComponent",
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
          "start": 470,
          "end": 506,
          "properties": [
            {
              "type": "Property",
              "start": 472,
              "end": 481,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 472,
                "end": 481,
                "name": "property1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 472,
                "end": 481,
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
                "selfClosing": false,
                "typeArguments": null
              },
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
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 537,
                  "end": 548,
                  "expression": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 547,
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
