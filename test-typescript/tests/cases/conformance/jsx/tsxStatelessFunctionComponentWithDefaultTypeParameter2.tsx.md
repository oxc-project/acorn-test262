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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "MyComponentProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "MyComponent1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 133,
          "end": 140,
          "name": "attr",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 156,
                  "end": 159,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
              "children": [
                {
                  "type": "JSXText",
                  "start": 160,
                  "end": 171,
                  "value": "attr.values",
                  "raw": "attr.values"
                }
              ]
            }
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 116,
              "end": 131,
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 131,
                "name": "MyComponentProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 200,
            "end": 226,
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
                      "value": 5,
                      "raw": "5"
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
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
