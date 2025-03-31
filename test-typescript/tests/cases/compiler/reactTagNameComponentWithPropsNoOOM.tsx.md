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
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 154,
            "name": "rest",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 157,
            "end": 159,
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
      "start": 161,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 182,
            "name": "children",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 185,
            "end": 187,
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
      "start": 189,
      "end": 242,
      "expression": {
        "type": "JSXElement",
        "start": 189,
        "end": 242,
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
                  "name": "classes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "name": "rest",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        },
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
        "children": [
          {
            "type": "JSXText",
            "start": 224,
            "end": 225,
            "value": "\n",
            "raw": "\n"
          },
          {
            "type": "JSXExpressionContainer",
            "start": 225,
            "end": 235,
            "expression": {
              "type": "Identifier",
              "start": 226,
              "end": 234,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "JSXText",
            "start": 235,
            "end": 236,
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
