__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 106,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                    "decorators": [],
                    "name": "pr1",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "pr2",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 108,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 122,
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 123,
        "end": 148,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 126,
            "end": 146,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 130,
                "end": 139,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 131,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 133,
                    "end": 139
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 145,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 142,
                "end": 145
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 164,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 163,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 163,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 163,
                  "decorators": [],
                  "name": "Obj1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 181,
      "expression": {
        "type": "JSXElement",
        "start": 165,
        "end": 180,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 165,
          "end": 180,
          "name": {
            "type": "JSXIdentifier",
            "start": 166,
            "end": 170,
            "name": "obj1"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 171,
              "end": 177,
              "name": {
                "type": "JSXIdentifier",
                "start": 171,
                "end": 172,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 173,
                "end": 177,
                "expression": {
                  "type": "Literal",
                  "start": 174,
                  "end": 176,
                  "value": 10,
                  "raw": "10"
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
