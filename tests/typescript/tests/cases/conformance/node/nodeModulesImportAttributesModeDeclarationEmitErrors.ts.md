__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 32,
          "decorators": [],
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 33,
          "end": 35,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 36,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 33,
          "decorators": [],
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 34,
          "end": 36,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "start": 18,
  "end": 416,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 18,
      "end": 99,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 32,
          "end": 48,
          "imported": {
            "type": "Identifier",
            "start": 32,
            "end": 48,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 48,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 61,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 69,
          "end": 96,
          "key": {
            "type": "Literal",
            "start": 69,
            "end": 86,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 88,
            "end": 96,
            "value": "foobar",
            "raw": "\"foobar\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 117,
      "end": 192,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 126,
          "end": 141,
          "imported": {
            "type": "Identifier",
            "start": 126,
            "end": 141,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 126,
            "end": 141,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 149,
        "end": 154,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 162,
          "end": 189,
          "key": {
            "type": "Literal",
            "start": 162,
            "end": 179,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 181,
            "end": 189,
            "value": "import",
            "raw": "\"import\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 222,
      "end": 335,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 230,
          "end": 258,
          "imported": {
            "type": "Identifier",
            "start": 235,
            "end": 251,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 255,
            "end": 258,
            "decorators": [],
            "name": "Req",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type"
        },
        {
          "type": "ImportSpecifier",
          "start": 260,
          "end": 284,
          "imported": {
            "type": "Identifier",
            "start": 260,
            "end": 276,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 280,
            "end": 284,
            "decorators": [],
            "name": "Req2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 291,
        "end": 296,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 304,
          "end": 332,
          "key": {
            "type": "Literal",
            "start": 304,
            "end": 321,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 323,
            "end": 332,
            "value": "require",
            "raw": "\"require\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 337,
      "end": 413,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 344,
        "end": 413,
        "id": {
          "type": "Identifier",
          "start": 354,
          "end": 368,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 377,
            "end": 393,
            "expression": {
              "type": "Identifier",
              "start": 377,
              "end": 393,
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 395,
            "end": 410,
            "expression": {
              "type": "Identifier",
              "start": 395,
              "end": 410,
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 411,
          "end": 413,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
