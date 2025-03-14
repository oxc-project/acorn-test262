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
      "kind": "module",
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "raw": "'react'",
        "value": "react"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 54,
      "end": 122,
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 101,
            "end": 120,
            "body": {
              "type": "TSInterfaceBody",
              "start": 117,
              "end": 120,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 116,
              "decorators": [],
              "name": "Thing",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 80,
        "decorators": [],
        "name": "ReactRouter",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 123,
      "end": 179,
      "kind": "module",
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
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 138,
        "end": 152,
        "raw": "'react-router'",
        "value": "react-router"
      }
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
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 72,
        "end": 88,
        "expression": {
          "type": "Literal",
          "start": 80,
          "end": 87,
          "raw": "'react'",
          "value": "react"
        }
      }
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 111,
        "end": 134,
        "expression": {
          "type": "Literal",
          "start": 119,
          "end": 133,
          "raw": "'react-router'",
          "value": "react-router"
        }
      }
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
        "optional": false
      },
      "importKind": "value",
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
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 164,
          "end": 169,
          "decorators": [],
          "name": "Route",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 183,
            "decorators": [],
            "name": "routes1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 186,
            "end": 195,
            "children": [],
            "closingElement": null,
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 198,
      "end": 230,
      "body": {
        "type": "TSModuleBlock",
        "start": 207,
        "end": 230,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 210,
            "end": 228,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 217,
              "end": 228,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 221,
                  "end": 227,
                  "definite": false,
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
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 231,
      "end": 316,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 306,
                  "end": 313,
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
                  },
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
                    "selfClosing": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 239,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
