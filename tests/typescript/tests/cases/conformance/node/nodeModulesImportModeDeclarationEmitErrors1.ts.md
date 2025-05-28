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
  "end": 422,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 18,
      "end": 101,
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
          "start": 71,
          "end": 98,
          "key": {
            "type": "Literal",
            "start": 71,
            "end": 88,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 90,
            "end": 98,
            "value": "foobar",
            "raw": "\"foobar\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 119,
      "end": 196,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 128,
          "end": 143,
          "imported": {
            "type": "Identifier",
            "start": 128,
            "end": 143,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 128,
            "end": 143,
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
        "start": 151,
        "end": 156,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 166,
          "end": 193,
          "key": {
            "type": "Literal",
            "start": 166,
            "end": 183,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 185,
            "end": 193,
            "value": "import",
            "raw": "\"import\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 226,
      "end": 341,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 234,
          "end": 262,
          "imported": {
            "type": "Identifier",
            "start": 239,
            "end": 255,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 259,
            "end": 262,
            "decorators": [],
            "name": "Req",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "type"
        },
        {
          "type": "ImportSpecifier",
          "start": 264,
          "end": 288,
          "imported": {
            "type": "Identifier",
            "start": 264,
            "end": 280,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 284,
            "end": 288,
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
        "start": 295,
        "end": 300,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 310,
          "end": 338,
          "key": {
            "type": "Literal",
            "start": 310,
            "end": 327,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 329,
            "end": 338,
            "value": "require",
            "raw": "\"require\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 343,
      "end": 419,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 350,
        "end": 419,
        "id": {
          "type": "Identifier",
          "start": 360,
          "end": 374,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 383,
            "end": 399,
            "expression": {
              "type": "Identifier",
              "start": 383,
              "end": 399,
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 401,
            "end": 416,
            "expression": {
              "type": "Identifier",
              "start": 401,
              "end": 416,
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
          "start": 417,
          "end": 419,
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
