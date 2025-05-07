__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 50,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "asFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 31,
          "end": 39,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 39,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 38,
              "end": 39,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 40,
        "end": 49,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 42,
          "end": 49,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 27,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 29,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 83,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 82,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 62,
            "end": 81,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 68,
              "end": 81,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 70,
                  "end": 79,
                  "argument": {
                    "type": "Literal",
                    "start": 77,
                    "end": 78,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 61,
          "decorators": [],
          "name": "asFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
