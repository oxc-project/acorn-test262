__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 58
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 65,
            "end": 83
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 97
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 99,
                "end": 105
              },
              "start": 97,
              "end": 105
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 106
          }
        ],
        "start": 59,
        "end": 108
      },
      "declare": false,
      "start": 34,
      "end": 108
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 143
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 165
                },
                "typeArguments": null,
                "start": 151,
                "end": 165
              },
              "start": 149,
              "end": 165
            },
            "start": 144,
            "end": 165
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 189,
                        "end": 196
                      },
                      "start": 187,
                      "end": 196
                    },
                    "start": 177,
                    "end": 196
                  },
                  "init": null,
                  "definite": false,
                  "start": 177,
                  "end": 196
                }
              ],
              "declare": false,
              "start": 173,
              "end": 197
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "condition1",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 216
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ChildComponent",
                          "start": 250,
                          "end": 264
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 269,
                              "end": 274
                            },
                            "start": 265,
                            "end": 275
                          }
                        ],
                        "selfClosing": true,
                        "start": 249,
                        "end": 278
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 249,
                      "end": 278
                    },
                    "start": 228,
                    "end": 289
                  }
                ],
                "start": 218,
                "end": 295
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ChildComponent",
                          "start": 324,
                          "end": 338
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 343,
                              "end": 348
                            },
                            "start": 339,
                            "end": 349
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "property1",
                              "start": 350,
                              "end": 359
                            },
                            "value": {
                              "type": "Literal",
                              "value": "NewString",
                              "raw": "\"NewString\"",
                              "start": 360,
                              "end": 371
                            },
                            "start": 350,
                            "end": 371
                          }
                        ],
                        "selfClosing": true,
                        "start": 323,
                        "end": 374
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 323,
                      "end": 374
                    },
                    "start": 315,
                    "end": 376
                  }
                ],
                "start": 305,
                "end": 382
              },
              "start": 202,
              "end": 382
            }
          ],
          "start": 167,
          "end": 384
        },
        "expression": false,
        "start": 125,
        "end": 384
      },
      "exportKind": "value",
      "start": 110,
      "end": 384
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 417
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 433
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 435,
                "end": 441
              },
              "start": 433,
              "end": 441
            },
            "accessibility": null,
            "static": false,
            "start": 424,
            "end": 442
          }
        ],
        "start": 418,
        "end": 444
      },
      "declare": false,
      "start": 386,
      "end": 444
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChildComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 455,
        "end": 469
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 481
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 481
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 472,
              "end": 481
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnotherComponentProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 506
              },
              "typeArguments": null,
              "start": 485,
              "end": 506
            },
            "start": 483,
            "end": 506
          },
          "start": 470,
          "end": 506
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 532,
                  "end": 536
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 531,
                "end": 537
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "property1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 538,
                    "end": 547
                  },
                  "start": 537,
                  "end": 548
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 550,
                  "end": 554
                },
                "start": 548,
                "end": 555
              },
              "start": 531,
              "end": 555
            },
            "start": 514,
            "end": 562
          }
        ],
        "start": 508,
        "end": 564
      },
      "expression": false,
      "start": 446,
      "end": 564
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 564
}
```
