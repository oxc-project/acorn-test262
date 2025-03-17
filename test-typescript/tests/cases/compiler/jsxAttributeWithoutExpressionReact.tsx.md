__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "name": "React",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 25,
            "end": 29,
            "name": "View"
          },
          "selfClosing": false,
          "typeArguments": null
        },
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
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 71,
                          "end": 85,
                          "name": "RefreshControl"
                        },
                        "selfClosing": true,
                        "typeArguments": null
                      },
                      "closingElement": null,
                      "children": []
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
                          "name": "state",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 147,
                        "name": "ds",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
              "name": {
                "type": "JSXIdentifier",
                "start": 36,
                "end": 44,
                "name": "ListView"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            },
            "children": [
              {
                "type": "JSXText",
                "start": 162,
                "end": 167,
                "value": "\n    ",
                "raw": "\n    "
              }
            ]
          },
          {
            "type": "JSXText",
            "start": 178,
            "end": 179,
            "value": "\n",
            "raw": "\n"
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
