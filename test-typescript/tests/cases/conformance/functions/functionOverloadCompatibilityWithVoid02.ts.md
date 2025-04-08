__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 11,
          "end": 20,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 14,
              "end": 20
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
        "start": 21,
        "end": 27,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 23,
          "end": 27
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 29,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "f",
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
          "start": 40,
          "end": 49,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 49,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 43,
              "end": 49
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 76,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 65,
            "end": 74,
            "argument": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 58,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 52,
          "end": 58
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
