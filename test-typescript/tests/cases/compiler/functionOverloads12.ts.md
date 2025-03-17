__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 21,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 15,
          "end": 21
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 23,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 44,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 38,
          "end": 44
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 65,
        "end": 103,
        "body": [
          {
            "type": "IfStatement",
            "start": 67,
            "end": 102,
            "test": {
              "type": "Literal",
              "start": 71,
              "end": 75,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 77,
              "end": 87,
              "argument": {
                "type": "Literal",
                "start": 84,
                "end": 86,
                "value": "",
                "raw": "\"\""
              }
            },
            "alternate": {
              "type": "ReturnStatement",
              "start": 93,
              "end": 102,
              "argument": {
                "type": "Literal",
                "start": 100,
                "end": 101,
                "value": 0,
                "raw": "0"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 60,
        "end": 64,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 61,
          "end": 64
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
