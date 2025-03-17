__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "name": "React",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
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
      "type": "TSModuleDeclaration",
      "start": 26,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 44,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 114,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 51,
            "end": 112,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 78,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 79,
              "end": 112,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 89,
                  "end": 106,
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 90,
                    "end": 99,
                    "value": "package",
                    "raw": "\"package\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 102,
                      "end": 105
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 155,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 135,
            "end": 153,
            "argument": {
              "type": "JSXElement",
              "start": 142,
              "end": 153,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 142,
                "end": 153,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 143,
                  "end": 150,
                  "name": "package"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 170,
        "end": 204,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 176,
            "end": 202,
            "argument": {
              "type": "JSXElement",
              "start": 183,
              "end": 202,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 183,
                "end": 192,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 184,
                  "end": 191,
                  "name": "package"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 192,
                "end": 202,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 194,
                  "end": 201,
                  "name": "package"
                }
              },
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
