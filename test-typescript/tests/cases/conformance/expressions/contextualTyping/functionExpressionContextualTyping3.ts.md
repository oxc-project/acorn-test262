__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 76,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 10,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
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
          "start": 32,
          "end": 49,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 49,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 39,
              "end": 49,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 39,
                  "end": 40,
                  "typeName": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 40,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 43,
                  "end": 49
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 28,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 30,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 56,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 52,
          "end": 56
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 75,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 75,
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 60,
            "end": 74,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 64,
                    "end": 67
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 72,
              "end": 74,
              "value": "",
              "raw": "\"\""
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
