__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 35,
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
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 33,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 33,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 17,
              "end": 33,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 18,
                  "end": 26,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 19,
                    "end": 26,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 20,
                      "end": 26
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 29,
                  "end": 33
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "name": "foo",
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
          "start": 49,
          "end": 69,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 69,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 53,
              "end": 69,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 54,
                  "end": 62,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 65,
                  "end": 69
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 84,
        "name": "foo",
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
          "start": 85,
          "end": 99,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 99,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 89,
              "end": 99,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 92,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 93,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 95,
                  "end": 99
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 113,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 103,
            "end": 111,
            "argument": {
              "type": "Literal",
              "start": 110,
              "end": 111,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
