__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "start": 17,
              "end": 22
            },
            "start": 12,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 22
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "View",
            "start": 25,
            "end": 29
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 24,
          "end": 30
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 30,
            "end": 35
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ListView",
                "start": 36,
                "end": 44
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "refreshControl",
                    "start": 45,
                    "end": 59
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "RefreshControl",
                          "start": 71,
                          "end": 85
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "onRefresh",
                              "start": 86,
                              "end": 95
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "JSXEmptyExpression",
                                "start": 97,
                                "end": 97
                              },
                              "start": 96,
                              "end": 98
                            },
                            "start": 86,
                            "end": 98
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "refreshing",
                              "start": 99,
                              "end": 109
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "JSXEmptyExpression",
                                "start": 111,
                                "end": 111
                              },
                              "start": 110,
                              "end": 112
                            },
                            "start": 99,
                            "end": 112
                          }
                        ],
                        "selfClosing": true,
                        "start": 70,
                        "end": 115
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 70,
                      "end": 115
                    },
                    "start": 60,
                    "end": 121
                  },
                  "start": 45,
                  "end": 121
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "dataSource",
                    "start": 122,
                    "end": 132
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 144
                        },
                        "optional": false,
                        "computed": false,
                        "start": 134,
                        "end": 144
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ds",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 147
                      },
                      "optional": false,
                      "computed": false,
                      "start": 134,
                      "end": 147
                    },
                    "start": 133,
                    "end": 148
                  },
                  "start": 122,
                  "end": 148
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "renderRow",
                    "start": 149,
                    "end": 158
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "JSXEmptyExpression",
                      "start": 160,
                      "end": 160
                    },
                    "start": 159,
                    "end": 161
                  },
                  "start": 149,
                  "end": 161
                }
              ],
              "selfClosing": false,
              "start": 35,
              "end": 162
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 162,
                "end": 167
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ListView",
                "start": 169,
                "end": 177
              },
              "start": 167,
              "end": 178
            },
            "start": 35,
            "end": 178
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 178,
            "end": 179
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "View",
            "start": 181,
            "end": 185
          },
          "start": 179,
          "end": 186
        },
        "start": 24,
        "end": 186
      },
      "directive": null,
      "start": 24,
      "end": 186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 186
}
```
