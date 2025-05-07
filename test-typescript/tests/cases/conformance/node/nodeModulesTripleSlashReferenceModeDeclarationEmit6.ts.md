__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 105,
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 105,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 60,
            "body": {
              "type": "TSInterfaceBody",
              "start": 58,
              "end": 60,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 57,
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 65,
            "end": 103,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 83,
              "decorators": [],
              "name": "getInterI",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 102,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 102,
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
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
  "end": 107,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 107,
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 107,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 61,
            "body": {
              "type": "TSInterfaceBody",
              "start": 59,
              "end": 61,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 58,
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 66,
            "end": 105,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 84,
              "decorators": [],
              "name": "getInterR",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 104,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 104,
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
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
  "start": 46,
  "end": 73,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 46,
      "end": 73,
      "declaration": {
        "type": "CallExpression",
        "start": 61,
        "end": 72,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 61,
          "end": 70,
          "decorators": [],
          "name": "getInterR",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
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
  "end": 63,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 27,
        "raw": "\"./uses.js\"",
        "value": "./uses.js",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 28,
      "end": 63,
      "declaration": {
        "type": "TSAsExpression",
        "start": 44,
        "end": 61,
        "expression": {
          "type": "Identifier",
          "start": 44,
          "end": 47,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 51,
          "end": 61,
          "exprName": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
