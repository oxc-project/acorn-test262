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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 36,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
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
          {
            "type": "TSExportAssignment",
            "start": 39,
            "end": 50,
            "expression": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "ReactRouter",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 98,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 98,
                  "decorators": [],
                  "name": "Route",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
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
            "type": "TSInterfaceDeclaration",
            "start": 101,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 116,
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
              "decorators": [],
              "name": "ReactRouter",
              "optional": false,
              "typeAnnotation": null
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
  "end": 316,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 57,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 69,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "ReactRouter",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "Route",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 152,
        "end": 169,
        "left": {
          "type": "Identifier",
          "start": 152,
          "end": 163,
          "decorators": [],
          "name": "ReactRouter",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 164,
          "end": 169,
          "decorators": [],
          "name": "Route",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 196,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 183,
            "decorators": [],
            "name": "routes1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 186,
            "end": 195,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 186,
              "end": 195,
              "name": {
                "type": "JSXIdentifier",
                "start": 187,
                "end": 192,
                "name": "Route"
              },
              "typeArguments": null,
              "attributes": [],
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
      "type": "TSModuleDeclaration",
      "start": 198,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 221,
                  "end": 227,
                  "id": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 227,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 227,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 224,
                        "end": 227
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 302,
                "end": 313,
                "id": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 306,
                  "end": 313,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 306,
                    "end": 309,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 307,
                      "end": 308,
                      "name": "X"
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": false
                  },
                  "children": [],
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
                  }
                },
                "definite": false
              }
            ],
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
