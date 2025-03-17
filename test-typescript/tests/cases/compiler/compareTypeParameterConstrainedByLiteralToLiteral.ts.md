__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 136,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 135,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 135,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 76,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 66,
              "end": 75,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 72,
                "end": 75,
                "raw": "\"a\"",
                "value": "a"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 113,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 103,
              "end": 112,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 109,
                "end": 112,
                "raw": "\"x\"",
                "value": "x"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 58,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 52,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 43,
              "end": 52,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 43,
                  "end": 46,
                  "literal": {
                    "type": "Literal",
                    "start": 43,
                    "end": 46,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 49,
                  "end": 52,
                  "literal": {
                    "type": "Literal",
                    "start": 49,
                    "end": 52,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
