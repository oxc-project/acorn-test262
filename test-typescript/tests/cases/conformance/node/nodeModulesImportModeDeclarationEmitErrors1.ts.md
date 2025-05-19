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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "body": {
          "type": "TSInterfaceBody",
          "start": 33,
          "end": 35,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 32,
          "decorators": [],
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 36,
        "body": {
          "type": "TSInterfaceBody",
          "start": 34,
          "end": 36,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 33,
          "decorators": [],
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "start": 18,
  "end": 422,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 18,
      "end": 101,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 61,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 48,
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
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
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 90,
            "end": 98,
            "raw": "\"foobar\"",
            "value": "foobar"
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 119,
      "end": 196,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 151,
        "end": 156,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 128,
            "end": 143,
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
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
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 185,
            "end": 193,
            "raw": "\"import\"",
            "value": "import"
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 226,
      "end": 341,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 295,
        "end": 300,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
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
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 259,
            "end": 262,
            "decorators": [],
            "name": "Req",
            "optional": false,
            "typeAnnotation": null
          }
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 284,
            "end": 288,
            "decorators": [],
            "name": "Req2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
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
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 329,
            "end": 338,
            "raw": "\"require\"",
            "value": "require"
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 343,
      "end": 419,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 350,
        "end": 419,
        "body": {
          "type": "TSInterfaceBody",
          "start": 417,
          "end": 419,
          "body": []
        },
        "declare": false,
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
        "id": {
          "type": "Identifier",
          "start": 360,
          "end": 374,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
