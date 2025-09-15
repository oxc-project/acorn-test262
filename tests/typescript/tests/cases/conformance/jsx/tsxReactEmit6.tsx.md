__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 84,
                          "end": 90
                        },
                        "start": 82,
                        "end": 90
                      },
                      "start": 81,
                      "end": 90
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 93,
                      "end": 96
                    },
                    "start": 91,
                    "end": 96
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 80,
                  "end": 97
                }
              ],
              "start": 76,
              "end": 100
            },
            "declare": false,
            "start": 48,
            "end": 100
          }
        ],
        "start": 22,
        "end": 102
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 102
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 33,
                        "end": 36
                      },
                      "start": 31,
                      "end": 36
                    },
                    "start": 26,
                    "end": 36
                  },
                  "init": null,
                  "definite": false,
                  "start": 26,
                  "end": 36
                }
              ],
              "declare": false,
              "start": 22,
              "end": 37
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 37
          }
        ],
        "start": 12,
        "end": 39
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 52
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 129,
                      "end": 132
                    },
                    "start": 127,
                    "end": 132
                  },
                  "start": 124,
                  "end": 132
                },
                "init": null,
                "definite": false,
                "start": 124,
                "end": 132
              }
            ],
            "declare": false,
            "start": 120,
            "end": 133
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spread1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 146
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "div",
                      "start": 150,
                      "end": 153
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "x",
                          "start": 154,
                          "end": 155
                        },
                        "value": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 156,
                          "end": 158
                        },
                        "start": 154,
                        "end": 158
                      },
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 166
                        },
                        "start": 159,
                        "end": 167
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "y",
                          "start": 168,
                          "end": 169
                        },
                        "value": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 170,
                          "end": 172
                        },
                        "start": 168,
                        "end": 172
                      }
                    ],
                    "selfClosing": true,
                    "start": 149,
                    "end": 175
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 149,
                  "end": 175
                },
                "definite": false,
                "start": 139,
                "end": 175
              }
            ],
            "declare": false,
            "start": 135,
            "end": 176
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 195
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "div",
                      "start": 199,
                      "end": 202
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": false,
                    "start": 198,
                    "end": 203
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "value": "This \"quote\" thing",
                      "raw": "This \"quote\" thing",
                      "start": 203,
                      "end": 221
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "div",
                      "start": 223,
                      "end": 226
                    },
                    "start": 221,
                    "end": 227
                  },
                  "start": 198,
                  "end": 227
                },
                "definite": false,
                "start": 194,
                "end": 227
              }
            ],
            "declare": false,
            "start": 190,
            "end": 228
          }
        ],
        "start": 53,
        "end": 230
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 41,
      "end": 230
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 231
}
```
