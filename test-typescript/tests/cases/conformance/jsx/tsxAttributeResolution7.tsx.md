__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 235,
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
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 108,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "name": "test1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 107,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 84,
                      "end": 107,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 86,
                          "end": 105,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "start": 86,
                            "end": 96,
                            "value": "data-foo",
                            "raw": "\"data-foo\""
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 97,
                            "end": 105,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 99,
                              "end": 105
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
      "start": 124,
      "end": 148,
      "expression": {
        "type": "JSXElement",
        "start": 124,
        "end": 147,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 124,
          "end": 147,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 131,
              "end": 144,
              "name": {
                "type": "JSXIdentifier",
                "start": 131,
                "end": 139,
                "name": "data-foo"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 140,
                "end": 144,
                "expression": {
                  "type": "Literal",
                  "start": 141,
                  "end": 143,
                  "value": 32,
                  "raw": "32"
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 125,
            "end": 130,
            "name": "test1"
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
      "start": 156,
      "end": 182,
      "expression": {
        "type": "JSXElement",
        "start": 156,
        "end": 181,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 156,
          "end": 181,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 163,
              "end": 178,
              "name": {
                "type": "JSXIdentifier",
                "start": 163,
                "end": 171,
                "name": "data-foo"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 172,
                "end": 178,
                "expression": {
                  "type": "Literal",
                  "start": 173,
                  "end": 177,
                  "value": "32",
                  "raw": "'32'"
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 157,
            "end": 162,
            "name": "test1"
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
      "start": 183,
      "end": 209,
      "expression": {
        "type": "JSXElement",
        "start": 183,
        "end": 208,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 183,
          "end": 208,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 190,
              "end": 205,
              "name": {
                "type": "JSXIdentifier",
                "start": 190,
                "end": 198,
                "name": "data-bar"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 199,
                "end": 205,
                "expression": {
                  "type": "Literal",
                  "start": 200,
                  "end": 204,
                  "value": "32",
                  "raw": "'32'"
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 184,
            "end": 189,
            "name": "test1"
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
      "start": 210,
      "end": 234,
      "expression": {
        "type": "JSXElement",
        "start": 210,
        "end": 233,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 210,
          "end": 233,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 217,
              "end": 230,
              "name": {
                "type": "JSXIdentifier",
                "start": 217,
                "end": 225,
                "name": "data-bar"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 226,
                "end": 230,
                "expression": {
                  "type": "Literal",
                  "start": 227,
                  "end": 229,
                  "value": 32,
                  "raw": "32"
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 211,
            "end": 216,
            "name": "test1"
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
