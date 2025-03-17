__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 202,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 31,
        "value": "./a.ts",
        "raw": "\"./a.ts\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 63,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 62,
        "value": "./a.ts",
        "raw": "\"./a.ts\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 73,
      "end": 111,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 82,
          "end": 94,
          "imported": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 92,
            "end": 94,
            "name": "_A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 102,
        "end": 110,
        "value": "./a.ts",
        "raw": "\"./a.ts\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 121,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 129,
        "name": "__A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "start": 132,
        "end": 150,
        "argument": {
          "type": "TSLiteralType",
          "start": 139,
          "end": 147,
          "literal": {
            "type": "Literal",
            "start": 139,
            "end": 147,
            "value": "./a.ts",
            "raw": "\"./a.ts\""
          }
        },
        "options": null,
        "qualifier": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 172,
            "name": "aPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 175,
            "end": 191,
            "source": {
              "type": "Literal",
              "start": 182,
              "end": 190,
              "value": "./a.ts",
              "raw": "\"./a.ts\""
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
  "end": 212,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "value": "./a.d.ts",
        "raw": "\"./a.d.ts\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 67,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 66,
        "value": "./a.d.ts",
        "raw": "\"./a.d.ts\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 77,
      "end": 117,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 86,
          "end": 98,
          "imported": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 96,
            "end": 98,
            "name": "_A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 106,
        "end": 116,
        "value": "./a.d.ts",
        "raw": "\"./a.d.ts\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 135,
        "name": "__A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "start": 138,
        "end": 158,
        "argument": {
          "type": "TSLiteralType",
          "start": 145,
          "end": 155,
          "literal": {
            "type": "Literal",
            "start": 145,
            "end": 155,
            "value": "./a.d.ts",
            "raw": "\"./a.d.ts\""
          }
        },
        "options": null,
        "qualifier": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 180,
            "name": "aPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 183,
            "end": 201,
            "source": {
              "type": "Literal",
              "start": 190,
              "end": 200,
              "value": "./a.d.ts",
              "raw": "\"./a.d.ts\""
            },
            "options": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
