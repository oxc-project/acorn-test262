__ESTREE_TEST__:PASS:
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
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 58,
        "decorators": [],
        "name": "MyComponentProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
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
      "start": 84,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 105,
        "decorators": [],
        "name": "MyComponent1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 132,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 131,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 155,
                "end": 160,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 156,
                  "end": 159,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 160,
                  "end": 171,
                  "value": "attr.values",
                  "raw": "attr.values"
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
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 227,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 200,
            "end": 226,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 200,
              "end": 226,
              "name": {
                "type": "JSXIdentifier",
                "start": 201,
                "end": 213,
                "name": "MyComponent1"
              },
              "typeArguments": null,
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
                      "value": 5,
                      "raw": "5"
                    }
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
