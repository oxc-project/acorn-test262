__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 186,
      "expression": {
        "type": "JSXElement",
        "start": 24,
        "end": 186,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 24,
          "end": 30,
          "name": {
            "type": "JSXIdentifier",
            "start": 25,
            "end": 29,
            "name": "View"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXText",
            "start": 30,
            "end": 35,
            "value": "\n    ",
            "raw": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 35,
            "end": 178,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 35,
              "end": 162,
              "name": {
                "type": "JSXIdentifier",
                "start": 36,
                "end": 44,
                "name": "ListView"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 45,
                  "end": 121,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 45,
                    "end": 59,
                    "name": "refreshControl"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 60,
                    "end": 121,
                    "expression": {
                      "type": "JSXElement",
                      "start": 70,
                      "end": 115,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 70,
                        "end": 115,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 71,
                          "end": 85,
                          "name": "RefreshControl"
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "start": 86,
                            "end": 98,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 86,
                              "end": 95,
                              "name": "onRefresh"
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "start": 96,
                              "end": 98,
                              "expression": {
                                "type": "JSXEmptyExpression",
                                "start": 97,
                                "end": 97
                              }
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 99,
                            "end": 112,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 99,
                              "end": 109,
                              "name": "refreshing"
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "start": 110,
                              "end": 112,
                              "expression": {
                                "type": "JSXEmptyExpression",
                                "start": 111,
                                "end": 111
                              }
                            }
                          }
                        ],
                        "selfClosing": true
                      },
                      "children": [],
                      "closingElement": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 122,
                  "end": 148,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 122,
                    "end": 132,
                    "name": "dataSource"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 133,
                    "end": 148,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 134,
                      "end": 147,
                      "object": {
                        "type": "MemberExpression",
                        "start": 134,
                        "end": 144,
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 144,
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 147,
                        "decorators": [],
                        "name": "ds",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 149,
                  "end": 161,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 149,
                    "end": 158,
                    "name": "renderRow"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 159,
                    "end": 161,
                    "expression": {
                      "type": "JSXEmptyExpression",
                      "start": 160,
                      "end": 160
                    }
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 162,
                "end": 167,
                "value": "\n    ",
                "raw": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 167,
              "end": 178,
              "name": {
                "type": "JSXIdentifier",
                "start": 169,
                "end": 177,
                "name": "ListView"
              }
            }
          },
          {
            "type": "JSXText",
            "start": 178,
            "end": 179,
            "value": "\n",
            "raw": "\n"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 179,
          "end": 186,
          "name": {
            "type": "JSXIdentifier",
            "start": 181,
            "end": 185,
            "name": "View"
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
