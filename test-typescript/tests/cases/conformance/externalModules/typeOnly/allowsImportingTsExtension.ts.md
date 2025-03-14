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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
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
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
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
  "end": 202,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 31,
        "raw": "\"./a.ts\"",
        "value": "./a.ts"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 63,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 62,
        "raw": "\"./a.ts\"",
        "value": "./a.ts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 73,
      "end": 111,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 102,
        "end": 110,
        "raw": "\"./a.ts\"",
        "value": "./a.ts"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 82,
          "end": 94,
          "imported": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 92,
            "end": 94,
            "decorators": [],
            "name": "_A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 121,
      "end": 151,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 129,
        "decorators": [],
        "name": "__A",
        "optional": false
      },
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
            "raw": "\"./a.ts\"",
            "value": "./a.ts"
          }
        },
        "options": null,
        "qualifier": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 172,
            "decorators": [],
            "name": "aPromise",
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 175,
            "end": 191,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 182,
              "end": 190,
              "raw": "\"./a.ts\"",
              "value": "./a.ts"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 33,
        "raw": "\"./a.d.ts\"",
        "value": "./a.d.ts"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 67,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 66,
        "raw": "\"./a.d.ts\"",
        "value": "./a.d.ts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 77,
      "end": 117,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 106,
        "end": 116,
        "raw": "\"./a.d.ts\"",
        "value": "./a.d.ts"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 86,
          "end": 98,
          "imported": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 96,
            "end": 98,
            "decorators": [],
            "name": "_A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 159,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 135,
        "decorators": [],
        "name": "__A",
        "optional": false
      },
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
            "raw": "\"./a.d.ts\"",
            "value": "./a.d.ts"
          }
        },
        "options": null,
        "qualifier": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 180,
            "decorators": [],
            "name": "aPromise",
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 183,
            "end": 201,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 190,
              "end": 200,
              "raw": "\"./a.d.ts\"",
              "value": "./a.d.ts"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
