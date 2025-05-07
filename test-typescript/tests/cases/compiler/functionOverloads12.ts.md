__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 22,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 21,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 15,
          "end": 21
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 23,
      "end": 45,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 44,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 38,
          "end": 44
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 103,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 65,
        "end": 103,
        "body": [
          {
            "type": "IfStatement",
            "start": 67,
            "end": 102,
            "alternate": {
              "type": "ReturnStatement",
              "start": 93,
              "end": 102,
              "argument": {
                "type": "Literal",
                "start": 100,
                "end": 101,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 77,
              "end": 87,
              "argument": {
                "type": "Literal",
                "start": 84,
                "end": 86,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            },
            "test": {
              "type": "Literal",
              "start": 71,
              "end": 75,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 60,
        "end": 64,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 61,
          "end": 64
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
