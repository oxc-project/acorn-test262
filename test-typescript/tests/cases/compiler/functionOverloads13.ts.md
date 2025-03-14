__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 23,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 17,
              "end": 23
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 24,
        "end": 31,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 25,
          "end": 31
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 33,
      "end": 65,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 46,
          "end": 56,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 56,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 50,
              "end": 56
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 64,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 58,
          "end": 64
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 66,
      "end": 109,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 109,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 98,
            "end": 107,
            "argument": {
              "type": "Literal",
              "start": 105,
              "end": 107,
              "raw": "\"\"",
              "value": ""
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 78,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 90,
          "decorators": [],
          "name": "bar",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 90,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 84,
              "end": 90
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 91,
        "end": 95,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 92,
          "end": 95
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
