__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 300,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 74,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 76,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 91,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 92,
        "end": 133,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 131,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 106,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 131,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 108,
                  "end": 126,
                  "left": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 113,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 126,
                    "decorators": [],
                    "name": "ReactElement",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 126,
                  "end": 131,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 127,
                      "end": 130
                    }
                  ]
                }
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
      "start": 135,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 151,
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 152,
          "end": 164,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 164,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 159,
              "end": 164,
              "typeName": {
                "type": "Identifier",
                "start": 159,
                "end": 164,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 208,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 172,
            "end": 206,
            "argument": {
              "type": "JSXElement",
              "start": 179,
              "end": 206,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 179,
                "end": 184,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 180,
                  "end": 183,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 184,
                  "end": 200,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 185,
                    "end": 199,
                    "object": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 190,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 199,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 200,
                "end": 206,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 202,
                  "end": 205,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 300,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 300,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 223,
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 232,
            "end": 298,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 232,
              "end": 241,
              "name": {
                "type": "JSXIdentifier",
                "start": 233,
                "end": 240,
                "name": "Wrapper"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 241,
                "end": 246,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 246,
                "end": 261,
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 247,
                  "end": 260
                }
              },
              {
                "type": "JSXText",
                "start": 261,
                "end": 267,
                "value": "\n     ",
                "raw": "\n     "
              },
              {
                "type": "JSXElement",
                "start": 267,
                "end": 283,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 267,
                  "end": 272,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 268,
                    "end": 271,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false
                },
                "children": [
                  {
                    "type": "JSXText",
                    "start": 272,
                    "end": 277,
                    "value": "Hello",
                    "raw": "Hello"
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 277,
                  "end": 283,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 279,
                    "end": 282,
                    "name": "div"
                  }
                }
              },
              {
                "type": "JSXText",
                "start": 283,
                "end": 288,
                "value": "\n    ",
                "raw": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 288,
              "end": 298,
              "name": {
                "type": "JSXIdentifier",
                "start": 290,
                "end": 297,
                "name": "Wrapper"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
