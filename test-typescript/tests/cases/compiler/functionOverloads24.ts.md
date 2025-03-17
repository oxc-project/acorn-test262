__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 42,
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
        "end": 41,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 25,
          "end": 41,
          "params": [
            {
              "type": "Identifier",
              "start": 26,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 28,
                  "end": 34
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 41,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 37,
              "end": 41
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 43,
      "end": 85,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 66,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 59,
            "end": 66,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 60,
              "end": 66
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 67,
        "end": 84,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 68,
          "end": 84,
          "params": [
            {
              "type": "Identifier",
              "start": 69,
              "end": 77,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 70,
                "end": 77,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 71,
                  "end": 77
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 84,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 80,
              "end": 84
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 141,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 141,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 120,
            "end": 139,
            "argument": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 139,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 137,
                "end": 139,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 99,
          "end": 106,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 106,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 103,
              "end": 106
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 107,
        "end": 117,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 108,
          "end": 117,
          "params": [
            {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 117,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 113,
              "end": 117
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
