__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
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
        "end": 99,
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
            "end": 97,
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
              "end": 97,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 77,
                  "end": 94,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 87,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 232,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 39,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 37,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 37,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 36,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 36,
                    "name": "React",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 31,
                      "end": 36,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 33,
                        "end": 36
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 41,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 53,
        "end": 230,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 120,
            "end": 133,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 124,
                "end": 132,
                "id": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 132,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 127,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 129,
                      "end": 132
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
            "type": "VariableDeclaration",
            "start": 135,
            "end": 176,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 175,
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 146,
                  "name": "spread1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 149,
                  "end": 175,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 149,
                    "end": 175,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 154,
                        "end": 158,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 154,
                          "end": 155,
                          "name": "x"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 156,
                          "end": 158,
                          "value": "",
                          "raw": "''"
                        }
                      },
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 159,
                        "end": 167,
                        "argument": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 166,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 168,
                        "end": 172,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 168,
                          "end": 169,
                          "name": "y"
                        },
                        "value": {
                          "type": "Literal",
                          "start": 170,
                          "end": 172,
                          "value": "",
                          "raw": "''"
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 150,
                      "end": 153,
                      "name": "div"
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 190,
            "end": 228,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 194,
                "end": 227,
                "id": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 195,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 198,
                  "end": 227,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 198,
                    "end": 203,
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 199,
                      "end": 202,
                      "name": "div"
                    },
                    "selfClosing": false,
                    "typeArguments": null
                  },
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "start": 221,
                    "end": 227,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 223,
                      "end": 226,
                      "name": "div"
                    }
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "start": 203,
                      "end": 221,
                      "value": "This \"quote\" thing",
                      "raw": "This \"quote\" thing"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
