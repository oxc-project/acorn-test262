__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 27
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "start": 28,
            "end": 41
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 44,
            "end": 50
          },
          "start": 42,
          "end": 50
        },
        "body": null,
        "expression": false,
        "start": 15,
        "end": 50
      },
      "exportKind": "value",
      "start": 0,
      "end": 50
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 78
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "start": 79,
            "end": 92
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 95,
            "end": 101
          },
          "start": 93,
          "end": 101
        },
        "body": null,
        "expression": false,
        "start": 66,
        "end": 101
      },
      "exportKind": "value",
      "start": 51,
      "end": 101
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 129
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 137,
                    "end": 143
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  }
                ],
                "start": 137,
                "end": 152
              },
              "start": 135,
              "end": 152
            },
            "start": 130,
            "end": 152
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
              },
              {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              }
            ],
            "start": 155,
            "end": 170
          },
          "start": 153,
          "end": 170
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 184,
                "end": 185
              },
              "start": 177,
              "end": 185
            }
          ],
          "start": 171,
          "end": 187
        },
        "expression": false,
        "start": 117,
        "end": 187
      },
      "exportKind": "value",
      "start": 102,
      "end": 187
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 216
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 217,
          "end": 219
        },
        "declare": false,
        "start": 203,
        "end": 219
      },
      "exportKind": "value",
      "start": 188,
      "end": 219
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 219
}
```
