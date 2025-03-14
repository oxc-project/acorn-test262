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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "expect",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 37,
          "decorators": [],
          "name": "spy",
          "optional": false,
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
                "decorators": [],
                "name": "Function",
                "optional": false
              }
            }
          }
        }
      ],
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 67,
        "end": 105,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 73,
            "end": 85,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 83,
              "end": 85,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "decorators": [],
              "name": "mod",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSExportAssignment",
            "start": 90,
            "end": 103,
            "expression": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "decorators": [],
              "name": "mod",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 61,
        "end": 66,
        "raw": "\"mod\"",
        "value": "mod"
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
  "end": 77,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 13,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 12,
        "raw": "\"mod\"",
        "value": "mod"
      },
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 15,
      "end": 77,
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 77,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 36,
            "end": 75,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 51,
              "decorators": [],
              "name": "expect",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 52,
                "end": 67,
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 59,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 61,
                    "end": 67
                  }
                }
              }
            ],
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
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 29,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
