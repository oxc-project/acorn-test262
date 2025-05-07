__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 27,
        "body": {
          "type": "TSInterfaceBody",
          "start": 24,
          "end": 27,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "ThingB",
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
  "end": 25,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 24,
        "raw": "\"./thingB\"",
        "value": "./thingB",
        "regex": null,
        "bigint": null
      }
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
  "end": 89,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 34,
        "raw": "\"./things\"",
        "value": "./things",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "things",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 89,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 89,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 49,
            "end": 88,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 55,
              "decorators": [],
              "name": "thing2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 58,
              "end": 88,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 84,
                "end": 88,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 79,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 79,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 66,
                        "end": 79,
                        "left": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 72,
                          "decorators": [],
                          "name": "things",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 79,
                          "decorators": [],
                          "name": "ThingB",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
