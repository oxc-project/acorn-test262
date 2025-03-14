/node_modules/pkg/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 29,
            "decorators": [],
            "name": "_exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 29,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 24,
                "end": 29,
                "literal": {
                  "type": "Literal",
                  "start": 24,
                  "end": 29,
                  "raw": "\"cjs\"",
                  "value": "cjs"
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSExportAssignment",
      "start": 31,
      "end": 49,
      "expression": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "decorators": [],
        "name": "_exports",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 72,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 41,
          "end": 69,
          "key": {
            "type": "Literal",
            "start": 41,
            "end": 58,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 60,
            "end": 69,
            "raw": "\"require\"",
            "value": "require"
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 12,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "decorators": [],
            "name": "pkgRequire",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 73,
      "end": 143,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 113,
          "end": 140,
          "key": {
            "type": "Literal",
            "start": 113,
            "end": 130,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 132,
            "end": 140,
            "raw": "\"import\"",
            "value": "import"
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 100,
        "end": 105,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 85,
          "end": 94,
          "local": {
            "type": "Identifier",
            "start": 85,
            "end": 94,
            "decorators": [],
            "name": "pkgImport",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 155,
      "expression": {
        "type": "Identifier",
        "start": 144,
        "end": 154,
        "decorators": [],
        "name": "pkgRequire",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 166,
      "expression": {
        "type": "Identifier",
        "start": 156,
        "end": 165,
        "decorators": [],
        "name": "pkgImport",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
