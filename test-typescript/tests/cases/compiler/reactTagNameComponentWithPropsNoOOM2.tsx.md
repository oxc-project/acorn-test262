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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 117,
            "name": "Tag",
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
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 102,
                    "end": 117,
                    "left": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 107,
                      "name": "React",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 117,
                      "name": "ReactHTML",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 133,
            "name": "classes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 136,
            "end": 138,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 185,
            "name": "rest",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 185,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 152,
                  "end": 172,
                  "left": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 157,
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 172,
                    "name": "HTMLAttributes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 172,
                  "end": 185,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 173,
                      "end": 184,
                      "typeName": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 184,
                        "name": "HTMLElement",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 188,
            "end": 190,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 213,
            "name": "children",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 216,
            "end": 218,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 273,
      "expression": {
        "type": "JSXElement",
        "start": 220,
        "end": 273,
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
                  "name": "classes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "name": "rest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        },
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
        "children": [
          {
            "type": "JSXText",
            "start": 255,
            "end": 256,
            "value": "\n",
            "raw": "\n"
          },
          {
            "type": "JSXExpressionContainer",
            "start": 256,
            "end": 266,
            "expression": {
              "type": "Identifier",
              "start": 257,
              "end": 265,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "JSXText",
            "start": 266,
            "end": 267,
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
