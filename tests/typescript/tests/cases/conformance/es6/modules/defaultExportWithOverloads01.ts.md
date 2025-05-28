__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 28,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 15,
        "end": 28,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": null,
        "expression": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 29,
      "end": 66,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 44,
        "end": 66,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 55,
            "end": 64,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              }
            }
          }
        ],
        "returnType": null,
        "body": null,
        "expression": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 67,
      "end": 112,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 82,
        "end": 112,
        "id": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 93,
            "end": 107,
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 107,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 102,
                "end": 107,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 102,
                  "end": 105
                }
              }
            },
            "value": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 109,
          "end": 112,
          "body": []
        },
        "expression": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
