__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 313,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 57,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 78,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 79,
        "end": 210,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 83,
            "end": 208,
            "id": {
              "type": "Identifier",
              "start": 93,
              "end": 110,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 111,
              "end": 208,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 117,
                  "end": 155,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 118,
                      "end": 135,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 119,
                        "end": 135,
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "start": 121,
                          "end": 135,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 121,
                              "end": 127,
                              "value": {
                                "raw": "foo",
                                "cooked": "foo"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 133,
                              "end": 135,
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 127,
                              "end": 133
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 136,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 138,
                      "end": 154,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 140,
                          "end": 152,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 144,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 144,
                            "end": 152,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 146,
                              "end": 152
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
                },
                {
                  "type": "TSIndexSignature",
                  "start": 160,
                  "end": 204,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 161,
                      "end": 181,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 162,
                        "end": 181,
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "start": 164,
                          "end": 181,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 164,
                              "end": 173,
                              "value": {
                                "raw": "foobar",
                                "cooked": "foobar"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 179,
                              "end": 181,
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 173,
                              "end": 179
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 182,
                    "end": 203,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 184,
                      "end": 203,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 186,
                          "end": 201,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 190,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 190,
                            "end": 201,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 192,
                              "end": 201,
                              "literal": {
                                "type": "Literal",
                                "start": 192,
                                "end": 201,
                                "value": "literal",
                                "raw": "'literal'"
                              }
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
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 235,
      "expression": {
        "type": "JSXElement",
        "start": 212,
        "end": 234,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 212,
          "end": 234,
          "name": {
            "type": "JSXIdentifier",
            "start": 213,
            "end": 219,
            "name": "foobaz"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 220,
              "end": 231,
              "name": {
                "type": "JSXIdentifier",
                "start": 220,
                "end": 224,
                "name": "prop"
              },
              "value": {
                "type": "Literal",
                "start": 225,
                "end": 231,
                "value": "smth",
                "raw": "\"smth\""
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 257,
      "expression": {
        "type": "JSXElement",
        "start": 236,
        "end": 256,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 236,
          "end": 256,
          "name": {
            "type": "JSXIdentifier",
            "start": 237,
            "end": 243,
            "name": "foobaz"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 244,
              "end": 253,
              "name": {
                "type": "JSXIdentifier",
                "start": 244,
                "end": 248,
                "name": "prop"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 249,
                "end": 253,
                "expression": {
                  "type": "Literal",
                  "start": 250,
                  "end": 252,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 259,
      "end": 287,
      "expression": {
        "type": "JSXElement",
        "start": 259,
        "end": 286,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 259,
          "end": 286,
          "name": {
            "type": "JSXIdentifier",
            "start": 260,
            "end": 269,
            "name": "foobarbaz"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 270,
              "end": 284,
              "name": {
                "type": "JSXIdentifier",
                "start": 270,
                "end": 274,
                "name": "prop"
              },
              "value": {
                "type": "Literal",
                "start": 275,
                "end": 284,
                "value": "literal",
                "raw": "\"literal\""
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 288,
      "end": 313,
      "expression": {
        "type": "JSXElement",
        "start": 288,
        "end": 312,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 288,
          "end": 312,
          "name": {
            "type": "JSXIdentifier",
            "start": 289,
            "end": 298,
            "name": "foobarbaz"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 299,
              "end": 310,
              "name": {
                "type": "JSXIdentifier",
                "start": 299,
                "end": 303,
                "name": "prop"
              },
              "value": {
                "type": "Literal",
                "start": 304,
                "end": 310,
                "value": "smth",
                "raw": "\"smth\""
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
