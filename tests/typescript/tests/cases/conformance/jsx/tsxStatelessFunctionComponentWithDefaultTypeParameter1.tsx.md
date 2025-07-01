__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponentProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 58
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "accessibility": null,
            "static": false,
            "start": 65,
            "end": 80
          }
        ],
        "start": 59,
        "end": 82
      },
      "declare": false,
      "start": 33,
      "end": 82
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 104
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyComponentProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 124
              },
              "typeArguments": null,
              "start": 109,
              "end": 124
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 105,
            "end": 124
          }
        ],
        "start": 104,
        "end": 125
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 133
              },
              "typeArguments": null,
              "start": 132,
              "end": 133
            },
            "start": 130,
            "end": 133
          },
          "start": 126,
          "end": 133
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 149,
                  "end": 152
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 148,
                "end": 153
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "attr.values",
                  "raw": "attr.values",
                  "start": 153,
                  "end": 164
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 166,
                  "end": 169
                },
                "start": 164,
                "end": 170
              },
              "start": 148,
              "end": 170
            },
            "start": 141,
            "end": 170
          }
        ],
        "start": 135,
        "end": 172
      },
      "expression": false,
      "start": 84,
      "end": 172
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 185
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComponent",
                "start": 189,
                "end": 200
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "values",
                    "start": 201,
                    "end": 207
                  },
                  "value": null,
                  "start": 201,
                  "end": 207
                }
              ],
              "selfClosing": true,
              "start": 188,
              "end": 210
            },
            "children": [],
            "closingElement": null,
            "start": 188,
            "end": 210
          },
          "definite": false,
          "start": 184,
          "end": 210
        }
      ],
      "declare": false,
      "start": 180,
      "end": 211
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 251
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComponent",
                "start": 255,
                "end": 266
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "values",
                    "start": 267,
                    "end": 273
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Hello",
                    "raw": "\"Hello\"",
                    "start": 274,
                    "end": 281
                  },
                  "start": 267,
                  "end": 281
                }
              ],
              "selfClosing": true,
              "start": 254,
              "end": 283
            },
            "children": [],
            "closingElement": null,
            "start": 254,
            "end": 283
          },
          "definite": false,
          "start": 249,
          "end": 283
        }
      ],
      "declare": false,
      "start": 245,
      "end": 284
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 284
}
```
