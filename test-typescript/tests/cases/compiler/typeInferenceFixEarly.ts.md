__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 36,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 36,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 25,
              "end": 36,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 30,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 29,
                      "end": 30,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 29,
                        "end": 30,
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
                "start": 32,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 35,
                  "end": 36,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 40,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 39,
          "end": 40,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "start": 43,
      "end": 53,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 52,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 45,
            "end": 51,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 50,
              "end": 51,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "f",
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
