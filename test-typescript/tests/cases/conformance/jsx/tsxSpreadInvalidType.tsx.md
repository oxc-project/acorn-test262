__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 79,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 77,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 77,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 54,
                "name": "IntrinsicElements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 55,
                "end": 77,
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "start": 57,
                    "end": 75,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 58,
                        "end": 69,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 61,
                          "end": 69,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 63,
                            "end": 69
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 75,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 72,
                        "end": 75
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 102,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 91,
            "end": 102,
            "expression": {
              "type": "ObjectExpression",
              "start": 91,
              "end": 93,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 97,
              "end": 102
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 114,
            "end": 118,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 130,
            "end": 139,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 152,
            "end": 168,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 152,
              "end": 168,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 157,
                  "end": 165,
                  "argument": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 153,
                "end": 156,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 179,
            "end": 195,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 179,
              "end": 195,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 184,
                  "end": 192,
                  "argument": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 180,
                "end": 183,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 222,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 206,
            "end": 222,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 206,
              "end": 222,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 211,
                  "end": 219,
                  "argument": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 207,
                "end": 210,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
