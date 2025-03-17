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
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
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
          "start": 54,
          "end": 58,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 135,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 76,
            "expression": {
              "type": "BinaryExpression",
              "start": 66,
              "end": 75,
              "left": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 72,
                "end": 75,
                "value": "a",
                "raw": "\"a\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 113,
            "expression": {
              "type": "BinaryExpression",
              "start": 103,
              "end": 112,
              "left": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 109,
                "end": 112,
                "value": "x",
                "raw": "\"x\""
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "value": "a",
                    "raw": "\"a\""
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
                    "value": "b",
                    "raw": "\"b\""
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
