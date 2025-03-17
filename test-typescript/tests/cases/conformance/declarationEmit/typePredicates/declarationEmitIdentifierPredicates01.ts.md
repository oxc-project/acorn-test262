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
            "start": 18,
            "end": 24,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
        "declare": false,
        "typeParameters": null,
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
