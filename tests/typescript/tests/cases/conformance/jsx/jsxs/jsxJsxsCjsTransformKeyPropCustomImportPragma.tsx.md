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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 102,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 96,
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 98,
                  "end": 100,
                  "value": 42,
                  "raw": "42"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 150,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 149,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 113,
              "end": 139,
              "name": {
                "type": "JSXIdentifier",
                "start": 114,
                "end": 117,
                "name": "div"
              },
              "typeArguments": null,
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
                    "value": "foo",
                    "raw": "\"foo\""
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
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 139,
                "end": 143,
                "value": "text",
                "raw": "text"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 198,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 197,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 161,
              "end": 187,
              "name": {
                "type": "JSXIdentifier",
                "start": 162,
                "end": 165,
                "name": "div"
              },
              "typeArguments": null,
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
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 187,
                "end": 191,
                "value": "text",
                "raw": "text"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 200,
      "end": 210,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 233,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 73,
      "end": 91,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 90,
        "value": "./preact",
        "raw": "\"./preact\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 121,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 121,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 115,
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 119,
                  "value": 42,
                  "raw": "42"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 171,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 170,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 133,
              "end": 160,
              "name": {
                "type": "JSXIdentifier",
                "start": 134,
                "end": 137,
                "name": "div"
              },
              "typeArguments": null,
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
                    "value": "foo",
                    "raw": "\"foo\""
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
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 160,
                "end": 164,
                "value": "text",
                "raw": "text"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 221,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 220,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 183,
              "end": 210,
              "name": {
                "type": "JSXIdentifier",
                "start": 184,
                "end": 187,
                "name": "div"
              },
              "typeArguments": null,
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
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 210,
                "end": 214,
                "value": "text",
                "raw": "text"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 223,
      "end": 233,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
