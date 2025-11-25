__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "importKind": "value",
          "start": 14,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a.ts",
        "raw": "\"./a.ts\"",
        "start": 23,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 32
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./a.ts",
        "raw": "\"./a.ts\"",
        "start": 54,
        "end": 62
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 63
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_A",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 94
          },
          "importKind": "type",
          "start": 82,
          "end": 94
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a.ts",
        "raw": "\"./a.ts\"",
        "start": 102,
        "end": 110
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 73,
      "end": 111
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__A",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 129
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "source": {
          "type": "Literal",
          "value": "./a.ts",
          "raw": "\"./a.ts\"",
          "start": 139,
          "end": 147
        },
        "options": null,
        "qualifier": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 150
        },
        "typeArguments": null,
        "start": 132,
        "end": 150
      },
      "declare": false,
      "start": 121,
      "end": 151
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 172
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./a.ts",
              "raw": "\"./a.ts\"",
              "start": 182,
              "end": 190
            },
            "options": null,
            "phase": null,
            "start": 175,
            "end": 191
          },
          "definite": false,
          "start": 164,
          "end": 191
        }
      ],
      "declare": false,
      "start": 158,
      "end": 192
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 202
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "importKind": "value",
          "start": 14,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a.d.ts",
        "raw": "\"./a.d.ts\"",
        "start": 23,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 34
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./a.d.ts",
        "raw": "\"./a.d.ts\"",
        "start": 56,
        "end": 66
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 41,
      "end": 67
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_A",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 98
          },
          "importKind": "type",
          "start": 86,
          "end": 98
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a.d.ts",
        "raw": "\"./a.d.ts\"",
        "start": 106,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 77,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__A",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 135
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "source": {
          "type": "Literal",
          "value": "./a.d.ts",
          "raw": "\"./a.d.ts\"",
          "start": 145,
          "end": 155
        },
        "options": null,
        "qualifier": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 158
        },
        "typeArguments": null,
        "start": 138,
        "end": 158
      },
      "declare": false,
      "start": 127,
      "end": 159
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 180
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./a.d.ts",
              "raw": "\"./a.d.ts\"",
              "start": 190,
              "end": 200
            },
            "options": null,
            "phase": null,
            "start": 183,
            "end": 201
          },
          "definite": false,
          "start": 172,
          "end": 201
        }
      ],
      "declare": false,
      "start": 166,
      "end": 202
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 211
}
```
