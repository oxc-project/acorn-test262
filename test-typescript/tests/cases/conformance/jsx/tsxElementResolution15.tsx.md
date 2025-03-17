__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 139,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 104,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 80,
              "name": "ElementAttributesProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 81,
              "end": 104,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 83,
                  "end": 92,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "name": "pr1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 88,
                      "end": 91
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 93,
                  "end": 102,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 96,
                    "name": "pr2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
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
            "type": "TSInterfaceDeclaration",
            "start": 106,
            "end": 137,
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 133,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 134,
              "end": 137,
              "body": []
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
      "type": "TSInterfaceDeclaration",
      "start": 141,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 159,
        "name": "Obj1type",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 160,
        "end": 184,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 163,
            "end": 182,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 167,
                "end": 176,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 168,
                  "end": 176,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 170,
                    "end": 176
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 179,
                "end": 181,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 203,
            "name": "Obj1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 203,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 203,
                  "name": "Obj1type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 221,
      "expression": {
        "type": "JSXElement",
        "start": 205,
        "end": 220,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 205,
          "end": 220,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 211,
              "end": 217,
              "name": {
                "type": "JSXIdentifier",
                "start": 211,
                "end": 212,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 213,
                "end": 217,
                "expression": {
                  "type": "Literal",
                  "start": 214,
                  "end": 216,
                  "value": 10,
                  "raw": "10"
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 206,
            "end": 210,
            "name": "Obj1"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
