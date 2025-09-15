__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 28,
          "end": 34
        },
        "start": 26,
        "end": 34
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 60
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 64,
          "end": 70
        },
        "start": 62,
        "end": 70
      },
      "body": null,
      "expression": false,
      "start": 36,
      "end": 71
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 92
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 119,
                  "end": 125
                },
                "start": 119,
                "end": 127
              },
              "start": 117,
              "end": 127
            },
            "body": null,
            "expression": false,
            "start": 99,
            "end": 128
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 149
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 153,
                  "end": 159
                },
                "start": 153,
                "end": 161
              },
              "start": 151,
              "end": 161
            },
            "body": null,
            "expression": false,
            "start": 133,
            "end": 162
          }
        ],
        "start": 93,
        "end": 164
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 72,
      "end": 164
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 177
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 215
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 219,
                  "end": 225
                },
                "start": 217,
                "end": 225
              },
              "body": null,
              "expression": false,
              "start": 191,
              "end": 226
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 184,
            "end": 226
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 262
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 266,
                  "end": 272
                },
                "start": 264,
                "end": 272
              },
              "body": null,
              "expression": false,
              "start": 238,
              "end": 273
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 231,
            "end": 273
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 283
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 286,
                  "end": 288
                },
                "definite": false,
                "start": 282,
                "end": 288
              }
            ],
            "declare": false,
            "start": 278,
            "end": 289
          }
        ],
        "start": 178,
        "end": 291
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 165,
      "end": 291
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 291
}
```
