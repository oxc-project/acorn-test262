__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 75,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 10,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 32,
          "end": 49,
          "decorators": [],
          "name": "value",
          "optional": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 56,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 52,
          "end": 56
        }
      },
      "body": null,
      "expression": false
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
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 60,
            "end": 74,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 64,
                    "end": 67
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 72,
              "end": 74,
              "value": "",
              "raw": "\"\""
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
