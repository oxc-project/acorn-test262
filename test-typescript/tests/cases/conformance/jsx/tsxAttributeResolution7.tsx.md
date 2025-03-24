__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 113,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 113,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 111,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 111,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 108,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "decorators": [],
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Literal",
                            "start": 86,
                            "end": 96,
                            "raw": "\"data-foo\"",
                            "value": "data-foo"
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 97,
                            "end": 105,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 99,
                              "end": 105
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 124,
        "end": 147,
        "children": [],
        "closingElement": null,
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
                  "raw": "32",
                  "value": 32
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
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 182,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 156,
        "end": 181,
        "children": [],
        "closingElement": null,
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
                  "raw": "'32'",
                  "value": "32"
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
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 183,
        "end": 208,
        "children": [],
        "closingElement": null,
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
                  "raw": "'32'",
                  "value": "32"
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
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 234,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 210,
        "end": 233,
        "children": [],
        "closingElement": null,
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
                  "raw": "32",
                  "value": 32
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
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
