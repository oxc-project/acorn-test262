__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "react",
        "raw": "'react'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 52,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 37,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 36,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "name": "x",
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
          {
            "type": "TSExportAssignment",
            "start": 39,
            "end": 50,
            "expression": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 54,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 80,
        "name": "ReactRouter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 81,
        "end": 122,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 99,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 98,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 98,
                  "name": "Route",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
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
            "type": "TSInterfaceDeclaration",
            "start": 101,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 116,
              "name": "Thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 117,
              "end": 120,
              "body": []
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
      "type": "TSModuleDeclaration",
      "start": 123,
      "end": 179,
      "id": {
        "type": "Literal",
        "start": 138,
        "end": 152,
        "value": "react-router",
        "raw": "'react-router'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 153,
        "end": 179,
        "body": [
          {
            "type": "TSExportAssignment",
            "start": 156,
            "end": 177,
            "expression": {
              "type": "Identifier",
              "start": 165,
              "end": 176,
              "name": "ReactRouter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
  "start": 57,
  "end": 317,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 57,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 69,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 72,
        "end": 88,
        "expression": {
          "type": "Literal",
          "start": 80,
          "end": 87,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 90,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 108,
        "name": "ReactRouter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 111,
        "end": 134,
        "expression": {
          "type": "Literal",
          "start": 119,
          "end": 133,
          "value": "react-router",
          "raw": "'react-router'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 137,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 149,
        "name": "Route",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 152,
        "end": 169,
        "left": {
          "type": "Identifier",
          "start": 152,
          "end": 163,
          "name": "ReactRouter",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 164,
          "end": 169,
          "name": "Route",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 183,
            "name": "routes1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 186,
            "end": 195,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 186,
              "end": 195,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 187,
                "end": 192,
                "name": "Route"
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
      "type": "TSModuleDeclaration",
      "start": 198,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 207,
        "end": 230,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 210,
            "end": 228,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 217,
              "end": 228,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 221,
                  "end": 227,
                  "id": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 227,
                    "name": "X",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 227,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 224,
                        "end": 227
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
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 231,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 239,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 240,
        "end": 316,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 298,
            "end": 314,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 302,
                "end": 313,
                "id": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 306,
                  "end": 313,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 306,
                    "end": 309,
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 307,
                      "end": 308,
                      "name": "X"
                    },
                    "selfClosing": false,
                    "typeArguments": null
                  },
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "start": 309,
                    "end": 313,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 311,
                      "end": 312,
                      "name": "X"
                    }
                  },
                  "children": []
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
