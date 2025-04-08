__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 284,
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
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 104,
        "name": "MyComponent",
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
          "start": 126,
          "end": 133,
          "name": "attr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 133,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 133,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
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
        "start": 135,
        "end": 172,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 141,
            "end": 170,
            "argument": {
              "type": "JSXElement",
              "start": 148,
              "end": 170,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 148,
                "end": 153,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 149,
                  "end": 152,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 164,
                "end": 170,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 166,
                  "end": 169,
                  "name": "div"
                }
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 153,
                  "end": 164,
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
        "start": 104,
        "end": 125,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 105,
            "end": 124,
            "name": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 109,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 124,
                "name": "MyComponentProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
      "start": 180,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 188,
            "end": 210,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 188,
              "end": 210,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 201,
                  "end": 207,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 201,
                    "end": 207,
                    "name": "values"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 189,
                "end": 200,
                "name": "MyComponent"
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
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 251,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 254,
            "end": 283,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 254,
              "end": 283,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 267,
                  "end": 281,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 267,
                    "end": 273,
                    "name": "values"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 274,
                    "end": 281,
                    "value": "Hello",
                    "raw": "\"Hello\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 255,
                "end": 266,
                "name": "MyComponent"
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
