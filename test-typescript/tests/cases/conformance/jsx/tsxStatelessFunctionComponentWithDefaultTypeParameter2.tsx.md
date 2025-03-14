file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 82,
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 82,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 65,
            "end": 80,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "values",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 58,
        "decorators": [],
        "name": "MyComponentProp",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 179,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 142,
        "end": 179,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 148,
            "end": 177,
            "argument": {
              "type": "JSXElement",
              "start": 155,
              "end": 177,
              "children": [
                {
                  "type": "JSXText",
                  "start": 160,
                  "end": 171,
                  "raw": "attr.values",
                  "value": "attr.values"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 171,
                "end": 177,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 173,
                  "end": 176,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 155,
                "end": 160,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 156,
                  "end": 159,
                  "name": "div"
                },
                "selfClosing": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 105,
        "decorators": [],
        "name": "MyComponent1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 133,
          "end": 140,
          "decorators": [],
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 132,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 131,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 116,
              "end": 131,
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 131,
                "decorators": [],
                "name": "MyComponentProp",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 226,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "decorators": [],
            "name": "i1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 200,
            "end": 226,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 200,
              "end": 226,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 214,
                  "end": 224,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 214,
                    "end": 220,
                    "name": "values"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 221,
                    "end": 224,
                    "expression": {
                      "type": "Literal",
                      "start": 222,
                      "end": 223,
                      "raw": "5",
                      "value": 5
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 201,
                "end": 213,
                "name": "MyComponent1"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
