__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 56,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 34,
          "decorators": [],
          "name": "__decorate",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "RestElement",
            "start": 35,
            "end": 49,
            "argument": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 49,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 44,
                "end": 49,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 44,
                  "end": 47
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 50,
          "end": 55,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 52,
            "end": 55
          }
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
  "end": 28,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 26,
        "raw": "\"./index.js\"",
        "value": "./index.js",
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
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 26,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 26,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 46,
        "end": 58,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 56,
          "end": 58,
          "body": []
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 28,
            "end": 38,
            "expression": {
              "type": "Identifier",
              "start": 29,
              "end": 38,
              "decorators": [],
              "name": "decorator",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 52,
          "end": 55,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
