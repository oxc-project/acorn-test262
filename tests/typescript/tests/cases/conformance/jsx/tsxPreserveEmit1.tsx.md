__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 15,
        "end": 22
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
                  "name": "x",
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
                  "start": 30,
                  "end": 36
                },
                "init": null,
                "definite": false,
                "start": 30,
                "end": 36
              }
            ],
            "declare": false,
            "start": 26,
            "end": 37
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "start": 39,
            "end": 50
          }
        ],
        "start": 23,
        "end": 52
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactRouter",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 83
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
                  "name": "Route",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    },
                    "start": 96,
                    "end": 101
                  },
                  "start": 91,
                  "end": 101
                },
                "init": null,
                "definite": false,
                "start": 91,
                "end": 101
              }
            ],
            "declare": false,
            "start": 87,
            "end": 102
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 119
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 120,
              "end": 123
            },
            "declare": false,
            "start": 104,
            "end": 123
          }
        ],
        "start": 84,
        "end": 125
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 54,
      "end": 125
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "react-router",
        "raw": "'react-router'",
        "start": 141,
        "end": 155
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReactRouter",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 179
            },
            "start": 159,
            "end": 180
          }
        ],
        "start": 156,
        "end": 182
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 126,
      "end": 182
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 183
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 69
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 80,
          "end": 87
        },
        "start": 72,
        "end": 88
      },
      "importKind": "value",
      "start": 57,
      "end": 89
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactRouter",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 108
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react-router",
          "raw": "'react-router'",
          "start": 119,
          "end": 133
        },
        "start": 111,
        "end": 134
      },
      "importKind": "value",
      "start": 90,
      "end": 135
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Route",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 149
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReactRouter",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 163
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Route",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 169
        },
        "start": 152,
        "end": 169
      },
      "importKind": "value",
      "start": 137,
      "end": 170
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
            "name": "routes1",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 183
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Route",
                "start": 187,
                "end": 192
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 186,
              "end": 195
            },
            "children": [],
            "closingElement": null,
            "start": 186,
            "end": 195
          },
          "definite": false,
          "start": 176,
          "end": 195
        }
      ],
      "declare": false,
      "start": 172,
      "end": 196
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 209
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 227,
                        "end": 230
                      },
                      "start": 225,
                      "end": 230
                    },
                    "start": 224,
                    "end": 230
                  },
                  "init": null,
                  "definite": false,
                  "start": 224,
                  "end": 230
                }
              ],
              "declare": false,
              "start": 220,
              "end": 231
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 213,
            "end": 231
          }
        ],
        "start": 210,
        "end": 233
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 198,
      "end": 233
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 245
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 309
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "X",
                      "start": 313,
                      "end": 314
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": false,
                    "start": 312,
                    "end": 315
                  },
                  "children": [],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "X",
                      "start": 317,
                      "end": 318
                    },
                    "start": 315,
                    "end": 319
                  },
                  "start": 312,
                  "end": 319
                },
                "definite": false,
                "start": 308,
                "end": 319
              }
            ],
            "declare": false,
            "start": 304,
            "end": 320
          }
        ],
        "start": 246,
        "end": 322
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 234,
      "end": 322
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 322
}
```
