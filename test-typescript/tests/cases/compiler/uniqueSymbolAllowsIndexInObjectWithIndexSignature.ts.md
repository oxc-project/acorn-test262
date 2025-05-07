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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 101,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 100,
            "definite": false,
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
              "arguments": [
                {
                  "type": "Literal",
                  "start": 82,
                  "end": 99,
                  "raw": "'a unique symbol'",
                  "value": "a unique symbol",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 75,
                "end": 81,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 163,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 110,
        "end": 163,
        "body": {
          "type": "TSInterfaceBody",
          "start": 122,
          "end": 163,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 126,
              "end": 139,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 127,
                "end": 130,
                "decorators": [],
                "name": "SYM",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "raw": "'sym'",
                    "value": "sym",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            },
            {
              "type": "TSIndexSignature",
              "start": 142,
              "end": 161,
              "accessibility": null,
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
              "readonly": false,
              "static": false,
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
                    "raw": "'str'",
                    "value": "str",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 190,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 181,
                  "decorators": [],
                  "name": "SYM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 184,
                  "end": 189,
                  "raw": "'sym'",
                  "value": "sym",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 230,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 221,
                  "decorators": [],
                  "name": "SYM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 224,
                  "end": 229,
                  "raw": "'str'",
                  "value": "str",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
