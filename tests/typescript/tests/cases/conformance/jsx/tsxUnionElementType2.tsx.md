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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SFC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 47
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 57
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    },
                    "start": 57,
                    "end": 65
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 56,
                  "end": 65
                }
              ],
              "start": 54,
              "end": 67
            },
            "start": 52,
            "end": 67
          },
          "start": 48,
          "end": 67
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
                  "name": "div",
                  "start": 83,
                  "end": 86
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 82,
                "end": 87
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "hello",
                  "raw": "hello",
                  "start": 87,
                  "end": 92
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 94,
                  "end": 97
                },
                "start": 92,
                "end": 98
              },
              "start": 82,
              "end": 98
            },
            "start": 75,
            "end": 99
          }
        ],
        "start": 69,
        "end": 101
      },
      "expression": false,
      "start": 34,
      "end": 101
    },
    {
      "type": "EmptyStatement",
      "start": 101,
      "end": 102
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SFC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 117
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 127
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 129,
                      "end": 136
                    },
                    "start": 127,
                    "end": 136
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 126,
                  "end": 136
                }
              ],
              "start": 124,
              "end": 138
            },
            "start": 122,
            "end": 138
          },
          "start": 118,
          "end": 138
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
                  "name": "h1",
                  "start": 154,
                  "end": 156
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 153,
                "end": 157
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "World ",
                  "raw": "World ",
                  "start": 157,
                  "end": 163
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 165,
                  "end": 167
                },
                "start": 163,
                "end": 168
              },
              "start": 153,
              "end": 168
            },
            "start": 146,
            "end": 169
          }
        ],
        "start": 140,
        "end": 171
      },
      "expression": false,
      "start": 104,
      "end": 171
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "SFCComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 184
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "SFC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 191
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "SFC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 199
            },
            "start": 187,
            "end": 199
          },
          "definite": false,
          "start": 177,
          "end": 199
        }
      ],
      "declare": false,
      "start": 173,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "SFCComp",
            "start": 202,
            "end": 209
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 210,
                "end": 211
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 213,
                  "end": 217
                },
                "start": 212,
                "end": 218
              },
              "start": 210,
              "end": 218
            }
          ],
          "selfClosing": true,
          "start": 201,
          "end": 220
        },
        "children": [],
        "closingElement": null,
        "start": 201,
        "end": 220
      },
      "directive": null,
      "start": 201,
      "end": 220
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 220
}
```
