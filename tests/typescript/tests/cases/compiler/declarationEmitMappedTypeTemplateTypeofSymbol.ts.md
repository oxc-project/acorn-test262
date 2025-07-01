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
              "name": "timestampSymbol",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 45,
                    "end": 51
                  },
                  "start": 38,
                  "end": 51
                },
                "start": 36,
                "end": 51
              },
              "start": 21,
              "end": 51
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 51
          }
        ],
        "declare": true,
        "start": 7,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 52
    },
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
              "name": "Timestamp",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 97
                  },
                  "constraint": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "timestampSymbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 101,
                    "end": 123
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 126,
                      "end": 130
                    },
                    "start": 126,
                    "end": 130
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 86,
                  "end": 133
                },
                "start": 84,
                "end": 133
              },
              "start": 75,
              "end": 133
            },
            "init": null,
            "definite": false,
            "start": 75,
            "end": 133
          }
        ],
        "declare": true,
        "start": 61,
        "end": 134
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 134
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "now",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 163
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Timestamp",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 183
            },
            "typeArguments": null,
            "start": 167,
            "end": 183
          },
          "start": 165,
          "end": 183
        },
        "body": null,
        "expression": false,
        "start": 143,
        "end": 184
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 136,
      "end": 184
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 185
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 19,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    },
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
              "name": "timestamp",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 48
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "now",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 56
                },
                "optional": false,
                "computed": false,
                "start": 51,
                "end": 56
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 51,
              "end": 58
            },
            "definite": false,
            "start": 39,
            "end": 58
          }
        ],
        "declare": false,
        "start": 33,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 26,
      "end": 59
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 60
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 20,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
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
              "name": "timestamp",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 50
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "now",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 56
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 53,
              "end": 58
            },
            "definite": false,
            "start": 41,
            "end": 58
          }
        ],
        "declare": false,
        "start": 35,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 28,
      "end": 59
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
