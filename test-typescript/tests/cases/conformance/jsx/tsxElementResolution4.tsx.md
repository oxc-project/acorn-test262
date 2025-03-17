__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 132,
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
        "end": 132,
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
            "end": 130,
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
              "end": 130,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 80,
                  "end": 100,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 83,
                    "name": "div",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 85,
                      "end": 99,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 87,
                          "end": 97,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 88,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 88,
                            "end": 96,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 90,
                              "end": 96
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 106,
                  "end": 127,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 110,
                    "name": "span",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 112,
                      "end": 126,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 114,
                          "end": 124,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 115,
                            "name": "m",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 115,
                            "end": 123,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 117,
                              "end": 123
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "type": "ExpressionStatement",
      "start": 140,
      "end": 154,
      "expression": {
        "type": "JSXElement",
        "start": 140,
        "end": 153,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 140,
          "end": 153,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 145,
              "end": 150,
              "name": {
                "type": "JSXIdentifier",
                "start": 145,
                "end": 146,
                "name": "n"
              },
              "value": {
                "type": "Literal",
                "start": 147,
                "end": 150,
                "value": "x",
                "raw": "'x'"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 141,
            "end": 144,
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
      "start": 162,
      "end": 178,
      "expression": {
        "type": "JSXElement",
        "start": 162,
        "end": 177,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 162,
          "end": 177,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 168,
              "end": 174,
              "name": {
                "type": "JSXIdentifier",
                "start": 168,
                "end": 169,
                "name": "m"
              },
              "value": {
                "type": "Literal",
                "start": 170,
                "end": 174,
                "value": "ok",
                "raw": "'ok'"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 163,
            "end": 167,
            "name": "span"
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
      "start": 189,
      "end": 203,
      "expression": {
        "type": "JSXElement",
        "start": 189,
        "end": 202,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 189,
          "end": 202,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 195,
              "end": 199,
              "name": {
                "type": "JSXIdentifier",
                "start": 195,
                "end": 196,
                "name": "q"
              },
              "value": {
                "type": "Literal",
                "start": 197,
                "end": 199,
                "value": "",
                "raw": "''"
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 190,
            "end": 194,
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
