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
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
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
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      }
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
  "end": 231,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 36,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 36,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 31,
                      "end": 36,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 33,
                        "end": 36
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 124,
                "end": 132,
                "id": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 132,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 127,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 129,
                      "end": 132
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
            "type": "VariableDeclaration",
            "start": 135,
            "end": 176,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 175,
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 146,
                  "decorators": [],
                  "name": "spread1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 149,
                  "end": 175,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 149,
                    "end": 175,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 150,
                      "end": 153,
                      "name": "div"
                    },
                    "typeArguments": null,
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
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
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
                    "selfClosing": true
                  },
                  "children": [],
                  "closingElement": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 190,
            "end": 228,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 194,
                "end": 227,
                "id": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 195,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 198,
                  "end": 227,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 198,
                    "end": 203,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 199,
                      "end": 202,
                      "name": "div"
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": false
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "start": 203,
                      "end": 221,
                      "value": "This \"quote\" thing",
                      "raw": "This \"quote\" thing"
                    }
                  ],
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
                  }
                },
                "definite": false
              }
            ],
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
