jsxAttributeWithoutExpressionReact.tsx
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 186,
      "expression": {
        "type": "JSXElement",
        "start": 24,
        "end": 186,
        "children": [
          {
            "type": "JSXText",
            "start": 30,
            "end": 35,
            "raw": "\n    ",
            "value": "\n    "
          },
          {
            "type": "JSXElement",
            "start": 35,
            "end": 178,
            "children": [
              {
                "type": "JSXText",
                "start": 162,
                "end": 167,
                "raw": "\n    ",
                "value": "\n    "
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
            },
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
                      "children": [],
                      "closingElement": null,
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
                        "selfClosing": true
                      }
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
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 134,
                        "end": 144,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 144,
                          "decorators": [],
                          "name": "state",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 147,
                        "decorators": [],
                        "name": "ds",
                        "optional": false
                      }
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
              "selfClosing": false
            }
          },
          {
            "type": "JSXText",
            "start": 178,
            "end": 179,
            "raw": "\n",
            "value": "\n"
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
        },
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
          "selfClosing": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
