__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SYM",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 72
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 81
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "a unique symbol",
                  "raw": "'a unique symbol'",
                  "start": 82,
                  "end": 99
                }
              ],
              "optional": false,
              "start": 75,
              "end": 100
            },
            "definite": false,
            "start": 69,
            "end": 100
          }
        ],
        "declare": false,
        "start": 63,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 101
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "SYM",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 130
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "sym",
                    "raw": "'sym'",
                    "start": 133,
                    "end": 138
                  },
                  "start": 133,
                  "end": 138
                },
                "start": 131,
                "end": 138
              },
              "accessibility": null,
              "static": false,
              "start": 126,
              "end": 139
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 146,
                      "end": 152
                    },
                    "start": 144,
                    "end": 152
                  },
                  "start": 143,
                  "end": 152
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "str",
                    "raw": "'str'",
                    "start": 155,
                    "end": 160
                  },
                  "start": 155,
                  "end": 160
                },
                "start": 153,
                "end": 160
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 142,
              "end": 161
            }
          ],
          "start": 122,
          "end": 163
        },
        "declare": false,
        "start": 110,
        "end": 163
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 103,
      "end": 163
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                },
                "typeArguments": null,
                "start": 172,
                "end": 173
              },
              "start": 170,
              "end": 173
            },
            "start": 169,
            "end": 173
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SYM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 181
                },
                "value": {
                  "type": "Literal",
                  "value": "sym",
                  "raw": "'sym'",
                  "start": 184,
                  "end": 189
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 177,
                "end": 189
              }
            ],
            "start": 176,
            "end": 190
          },
          "definite": false,
          "start": 169,
          "end": 190
        }
      ],
      "declare": false,
      "start": 165,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 213
                },
                "typeArguments": null,
                "start": 212,
                "end": 213
              },
              "start": 210,
              "end": 213
            },
            "start": 209,
            "end": 213
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SYM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 221
                },
                "value": {
                  "type": "Literal",
                  "value": "str",
                  "raw": "'str'",
                  "start": 224,
                  "end": 229
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 217,
                "end": 229
              }
            ],
            "start": 216,
            "end": 230
          },
          "definite": false,
          "start": 209,
          "end": 230
        }
      ],
      "declare": false,
      "start": 205,
      "end": 231
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 247
}
```
