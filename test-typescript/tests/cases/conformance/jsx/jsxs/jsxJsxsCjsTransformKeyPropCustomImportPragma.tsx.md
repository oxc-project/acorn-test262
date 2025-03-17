__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 74,
  "end": 211,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 85,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 88,
            "end": 102,
            "properties": [
              {
                "type": "Property",
                "start": 90,
                "end": 100,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 96,
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 98,
                  "end": 100,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 113,
            "end": 149,
            "children": [
              {
                "type": "JSXText",
                "start": 139,
                "end": 143,
                "raw": "text",
                "value": "text"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 143,
              "end": 149,
              "name": {
                "type": "JSXIdentifier",
                "start": 145,
                "end": 148,
                "name": "div"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 113,
              "end": 139,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 118,
                  "end": 127,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 118,
                    "end": 121,
                    "name": "key"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 122,
                    "end": 127,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 128,
                  "end": 138,
                  "argument": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 137,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 114,
                "end": 117,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 198,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 197,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 161,
            "end": 197,
            "children": [
              {
                "type": "JSXText",
                "start": 187,
                "end": 191,
                "raw": "text",
                "value": "text"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 191,
              "end": 197,
              "name": {
                "type": "JSXIdentifier",
                "start": 193,
                "end": 196,
                "name": "div"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 161,
              "end": 187,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 166,
                  "end": 176,
                  "argument": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 175,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 177,
                  "end": 186,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 177,
                    "end": 180,
                    "name": "key"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 181,
                    "end": 186,
                    "raw": "\"bar\"",
                    "value": "bar"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 162,
                "end": 165,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 200,
      "end": 210,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 73,
  "end": 234,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 73,
      "end": 91,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 90,
        "raw": "\"./preact\"",
        "value": "./preact"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 104,
            "decorators": [],
            "name": "props2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 107,
            "end": 121,
            "properties": [
              {
                "type": "Property",
                "start": 109,
                "end": 119,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 115,
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 119,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 170,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 130,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 133,
            "end": 170,
            "children": [
              {
                "type": "JSXText",
                "start": 160,
                "end": 164,
                "raw": "text",
                "value": "text"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 164,
              "end": 170,
              "name": {
                "type": "JSXIdentifier",
                "start": 166,
                "end": 169,
                "name": "div"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 133,
              "end": 160,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 138,
                  "end": 147,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 138,
                    "end": 141,
                    "name": "key"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 142,
                    "end": 147,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 148,
                  "end": 159,
                  "argument": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 158,
                    "decorators": [],
                    "name": "props2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 134,
                "end": 137,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 180,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 183,
            "end": 220,
            "children": [
              {
                "type": "JSXText",
                "start": 210,
                "end": 214,
                "raw": "text",
                "value": "text"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 214,
              "end": 220,
              "name": {
                "type": "JSXIdentifier",
                "start": 216,
                "end": 219,
                "name": "div"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 183,
              "end": 210,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 188,
                  "end": 199,
                  "argument": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 198,
                    "decorators": [],
                    "name": "props2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 200,
                  "end": 209,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 200,
                    "end": 203,
                    "name": "key"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 204,
                    "end": 209,
                    "raw": "\"bar\"",
                    "value": "bar"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 184,
                "end": 187,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 223,
      "end": 233,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
