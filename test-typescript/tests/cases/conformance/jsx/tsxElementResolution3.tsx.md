__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 113,
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
        "end": 113,
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
            "end": 111,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 111,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 80,
                  "end": 108,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 81,
                      "end": 90,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 82,
                        "end": 90,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 84,
                          "end": 90
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 107,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 93,
                      "end": 107,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 95,
                          "end": 105,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 96,
                            "end": 104,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 98,
                              "end": 104
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
      "type": "ExpressionStatement",
      "start": 121,
      "end": 135,
      "expression": {
        "type": "JSXElement",
        "start": 121,
        "end": 134,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 121,
          "end": 134,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 126,
              "end": 131,
              "name": {
                "type": "JSXIdentifier",
                "start": 126,
                "end": 127,
                "name": "n"
              },
              "value": {
                "type": "Literal",
                "start": 128,
                "end": 131,
                "value": "x",
                "raw": "'x'"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 122,
            "end": 125,
            "name": "div"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 163,
      "expression": {
        "type": "JSXElement",
        "start": 146,
        "end": 162,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 146,
          "end": 162,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 152,
              "end": 159,
              "name": {
                "type": "JSXIdentifier",
                "start": 152,
                "end": 153,
                "name": "w"
              },
              "value": {
                "type": "Literal",
                "start": 154,
                "end": 159,
                "value": "err",
                "raw": "'err'"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 147,
            "end": 151,
            "name": "span"
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
