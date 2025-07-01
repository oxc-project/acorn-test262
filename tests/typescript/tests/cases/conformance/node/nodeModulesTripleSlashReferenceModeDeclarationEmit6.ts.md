__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 57
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 58,
              "end": 60
            },
            "declare": false,
            "start": 32,
            "end": 60
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInterI",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 83
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 102
                },
                "typeArguments": null,
                "start": 87,
                "end": 102
              },
              "start": 85,
              "end": 102
            },
            "body": null,
            "expression": false,
            "start": 65,
            "end": 103
          }
        ],
        "start": 26,
        "end": 105
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 11,
      "end": 105
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 105
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 58
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 59,
              "end": 61
            },
            "declare": false,
            "start": 32,
            "end": 61
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInterR",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 84
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 104
                },
                "typeArguments": null,
                "start": 88,
                "end": 104
              },
              "start": 86,
              "end": 104
            },
            "body": null,
            "expression": false,
            "start": 66,
            "end": 105
          }
        ],
        "start": 26,
        "end": 107
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 11,
      "end": 107
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getInterR",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 70
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 61,
        "end": 72
      },
      "exportKind": "value",
      "start": 46,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 46,
  "end": 73
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "start": 7,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./uses.js",
        "raw": "\"./uses.js\"",
        "start": 16,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSAsExpression",
        "expression": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 47
        },
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 61
          },
          "typeArguments": null,
          "start": 51,
          "end": 61
        },
        "start": 44,
        "end": 61
      },
      "exportKind": "value",
      "start": 28,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```
