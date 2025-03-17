__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "name": "expect",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 37,
          "name": "spy",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 37,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 37,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 37,
                "name": "Function",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 44,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 40,
          "end": 44
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 46,
      "end": 105,
      "id": {
        "type": "Literal",
        "start": 61,
        "end": 66,
        "value": "mod",
        "raw": "\"mod\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 67,
        "end": 105,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 73,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "name": "mod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 83,
              "end": 85,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSExportAssignment",
            "start": 90,
            "end": 103,
            "expression": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "name": "mod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 77,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 13,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 12,
        "value": "mod",
        "raw": "\"mod\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 15,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 29,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 77,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 36,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 51,
              "name": "expect",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 52,
                "end": 67,
                "name": "element",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 59,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 61,
                    "end": 67
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 74,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              }
            }
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
