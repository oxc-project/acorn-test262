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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 105,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 57,
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 58,
              "end": 60,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 65,
            "end": 103,
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 83,
              "decorators": [],
              "name": "getInterI",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 102,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 102,
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 107,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 58,
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 59,
              "end": 61,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 66,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 84,
              "decorators": [],
              "name": "getInterR",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 104,
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": null,
            "expression": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
        "callee": {
          "type": "Identifier",
          "start": 61,
          "end": 70,
          "decorators": [],
          "name": "getInterR",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 27,
        "value": "./uses.js",
        "raw": "\"./uses.js\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
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
