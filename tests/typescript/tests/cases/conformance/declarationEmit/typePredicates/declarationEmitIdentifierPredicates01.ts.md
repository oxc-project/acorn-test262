__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 76,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 76,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
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
            "start": 18,
            "end": 24,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 25,
          "end": 38,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 27,
            "end": 38,
            "parameterName": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              }
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 39,
          "end": 76,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 45,
              "end": 74,
              "argument": {
                "type": "BinaryExpression",
                "start": 52,
                "end": 73,
                "left": {
                  "type": "UnaryExpression",
                  "start": 52,
                  "end": 60,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 65,
                  "end": 73,
                  "value": "number",
                  "raw": "\"number\""
                }
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
