__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 242,
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
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 154,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 152,
                "end": 154,
                "members": []
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 157,
            "end": 159,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 182,
            "decorators": [],
            "name": "children",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 182,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 177,
                "end": 182,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 177,
                  "end": 180
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 185,
            "end": 187,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 242,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 189,
        "end": 242,
        "children": [
          {
            "type": "JSXText",
            "start": 224,
            "end": 225,
            "raw": "\n",
            "value": "\n"
          },
          {
            "type": "JSXExpressionContainer",
            "start": 225,
            "end": 235,
            "expression": {
              "type": "Identifier",
              "start": 226,
              "end": 234,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "JSXText",
            "start": 235,
            "end": 236,
            "raw": "\n",
            "value": "\n"
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 236,
          "end": 242,
          "name": {
            "type": "JSXIdentifier",
            "start": 238,
            "end": 241,
            "name": "Tag"
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 189,
          "end": 224,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 194,
              "end": 213,
              "name": {
                "type": "JSXIdentifier",
                "start": 194,
                "end": 203,
                "name": "className"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 204,
                "end": 213,
                "expression": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 212,
                  "decorators": [],
                  "name": "classes",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "JSXSpreadAttribute",
              "start": 214,
              "end": 223,
              "argument": {
                "type": "Identifier",
                "start": 218,
                "end": 222,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 190,
            "end": 193,
            "name": "Tag"
          },
          "selfClosing": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
