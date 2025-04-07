__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 273,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "raw": "\"react\"",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 117,
            "decorators": [],
            "name": "Tag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 96,
                "end": 117,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 102,
                  "end": 117,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 102,
                    "end": 117,
                    "left": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 107,
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 117,
                      "decorators": [],
                      "name": "ReactHTML",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 133,
            "decorators": [],
            "name": "classes",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 136,
            "end": 138,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 185,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 185,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 172,
                  "end": 185,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 173,
                      "end": 184,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 184,
                        "decorators": [],
                        "name": "HTMLElement",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 152,
                  "end": 172,
                  "left": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 157,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 172,
                    "decorators": [],
                    "name": "HTMLAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 188,
            "end": 190,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 218,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 213,
            "decorators": [],
            "name": "children",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 213,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 208,
                "end": 213,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 208,
                  "end": 211
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 216,
            "end": 218,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 273,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 220,
        "end": 273,
        "children": [
          {
            "type": "JSXText",
            "start": 255,
            "end": 256,
            "raw": "\n",
            "value": "\n"
          },
          {
            "type": "JSXExpressionContainer",
            "start": 256,
            "end": 266,
            "expression": {
              "type": "Identifier",
              "start": 257,
              "end": 265,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "JSXText",
            "start": 266,
            "end": 267,
            "raw": "\n",
            "value": "\n"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 267,
          "end": 273,
          "name": {
            "type": "JSXIdentifier",
            "start": 269,
            "end": 272,
            "name": "Tag"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 220,
          "end": 255,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 225,
              "end": 244,
              "name": {
                "type": "JSXIdentifier",
                "start": 225,
                "end": 234,
                "name": "className"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 235,
                "end": 244,
                "expression": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 243,
                  "decorators": [],
                  "name": "classes",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "JSXSpreadAttribute",
              "start": 245,
              "end": 254,
              "argument": {
                "type": "Identifier",
                "start": 249,
                "end": 253,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 221,
            "end": 224,
            "name": "Tag"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
