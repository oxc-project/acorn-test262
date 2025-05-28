__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 247,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 101,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 101,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 100,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "SYM",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 75,
              "end": 100,
              "callee": {
                "type": "Identifier",
                "start": 75,
                "end": 81,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 82,
                  "end": 99,
                  "value": "a unique symbol",
                  "raw": "'a unique symbol'"
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 163,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 110,
        "end": 163,
        "id": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 122,
          "end": 163,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 126,
              "end": 139,
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 127,
                "end": 130,
                "decorators": [],
                "name": "SYM",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 131,
                "end": 138,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 133,
                  "end": 138,
                  "literal": {
                    "type": "Literal",
                    "start": 133,
                    "end": 138,
                    "value": "sym",
                    "raw": "'sym'"
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSIndexSignature",
              "start": 142,
              "end": 161,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 143,
                  "end": 152,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 144,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 146,
                      "end": 152
                    }
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 153,
                "end": 160,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 155,
                  "end": 160,
                  "literal": {
                    "type": "Literal",
                    "start": 155,
                    "end": 160,
                    "value": "str",
                    "raw": "'str'"
                  }
                }
              },
              "readonly": false,
              "static": false,
              "accessibility": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 191,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 173,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 176,
            "end": 190,
            "properties": [
              {
                "type": "Property",
                "start": 177,
                "end": 189,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 181,
                  "decorators": [],
                  "name": "SYM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 184,
                  "end": 189,
                  "value": "sym",
                  "raw": "'sym'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
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
      "start": 205,
      "end": 231,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 213,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 213,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 216,
            "end": 230,
            "properties": [
              {
                "type": "Property",
                "start": 217,
                "end": 229,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 221,
                  "decorators": [],
                  "name": "SYM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 224,
                  "end": 229,
                  "value": "str",
                  "raw": "'str'"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
