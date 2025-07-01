__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 74
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 91
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
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 113
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 126
                  },
                  "start": 108,
                  "end": 126
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 127,
                      "end": 130
                    }
                  ],
                  "start": 126,
                  "end": 131
                },
                "start": 108,
                "end": 131
              },
              "start": 106,
              "end": 131
            },
            "accessibility": null,
            "static": false,
            "start": 98,
            "end": 131
          }
        ],
        "start": 92,
        "end": 133
      },
      "declare": false,
      "start": 76,
      "end": 133
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 151
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
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 164
              },
              "typeArguments": null,
              "start": 159,
              "end": 164
            },
            "start": 157,
            "end": 164
          },
          "start": 152,
          "end": 164
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
                  "start": 180,
                  "end": 183
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 179,
                "end": 184
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 190
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 199
                    },
                    "optional": false,
                    "computed": false,
                    "start": 185,
                    "end": 199
                  },
                  "start": 184,
                  "end": 200
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 202,
                  "end": 205
                },
                "start": 200,
                "end": 206
              },
              "start": 179,
              "end": 206
            },
            "start": 172,
            "end": 206
          }
        ],
        "start": 166,
        "end": 208
      },
      "expression": false,
      "start": 135,
      "end": 208
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 223
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Wrapper",
                "start": 233,
                "end": 240
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 232,
              "end": 241
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 241,
                "end": 246
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 247,
                  "end": 260
                },
                "start": 246,
                "end": 261
              },
              {
                "type": "JSXText",
                "value": "\n     ",
                "raw": "\n     ",
                "start": 261,
                "end": 267
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 268,
                    "end": 271
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 267,
                  "end": 272
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": "Hello",
                    "raw": "Hello",
                    "start": 272,
                    "end": 277
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 279,
                    "end": 282
                  },
                  "start": 277,
                  "end": 283
                },
                "start": 267,
                "end": 283
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 283,
                "end": 288
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Wrapper",
                "start": 290,
                "end": 297
              },
              "start": 288,
              "end": 298
            },
            "start": 232,
            "end": 298
          },
          "definite": false,
          "start": 216,
          "end": 300
        }
      ],
      "declare": false,
      "start": 210,
      "end": 300
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 300
}
```
