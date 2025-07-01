__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ThingB",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 24,
          "end": 27
        },
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./thingB",
        "raw": "\"./thingB\"",
        "start": 14,
        "end": 24
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "things",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./things",
        "raw": "\"./things\"",
        "start": 24,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing2",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 55
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "things",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 66,
                          "end": 72
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThingB",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 79
                        },
                        "start": 66,
                        "end": 79
                      },
                      "typeArguments": null,
                      "start": 66,
                      "end": 79
                    },
                    "start": 64,
                    "end": 79
                  },
                  "start": 59,
                  "end": 79
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 84,
                "end": 88
              },
              "id": null,
              "generator": false,
              "start": 58,
              "end": 88
            },
            "definite": false,
            "start": 49,
            "end": 88
          }
        ],
        "declare": false,
        "start": 43,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
