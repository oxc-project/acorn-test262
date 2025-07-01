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
        "start": 69,
        "end": 80
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
                      "start": 95,
                      "end": 98
                    },
                    "start": 93,
                    "end": 98
                  },
                  "start": 88,
                  "end": 98
                },
                "init": null,
                "definite": false,
                "start": 88,
                "end": 98
              }
            ],
            "declare": false,
            "start": 84,
            "end": 99
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 116
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 117,
              "end": 120
            },
            "declare": false,
            "start": 101,
            "end": 120
          }
        ],
        "start": 81,
        "end": 122
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 54,
      "end": 122
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "react-router",
        "raw": "'react-router'",
        "start": 138,
        "end": 152
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
              "start": 165,
              "end": 176
            },
            "start": 156,
            "end": 177
          }
        ],
        "start": 153,
        "end": 179
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 123,
      "end": 179
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 180
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
        "start": 205,
        "end": 206
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
                        "start": 224,
                        "end": 227
                      },
                      "start": 222,
                      "end": 227
                    },
                    "start": 221,
                    "end": 227
                  },
                  "init": null,
                  "definite": false,
                  "start": 221,
                  "end": 227
                }
              ],
              "declare": false,
              "start": 217,
              "end": 228
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 210,
            "end": 228
          }
        ],
        "start": 207,
        "end": 230
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 198,
      "end": 230
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 239
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
                  "start": 302,
                  "end": 303
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "X",
                      "start": 307,
                      "end": 308
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": false,
                    "start": 306,
                    "end": 309
                  },
                  "children": [],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "X",
                      "start": 311,
                      "end": 312
                    },
                    "start": 309,
                    "end": 313
                  },
                  "start": 306,
                  "end": 313
                },
                "definite": false,
                "start": 302,
                "end": 313
              }
            ],
            "declare": false,
            "start": 298,
            "end": 314
          }
        ],
        "start": 240,
        "end": 316
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 231,
      "end": 316
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 316
}
```
