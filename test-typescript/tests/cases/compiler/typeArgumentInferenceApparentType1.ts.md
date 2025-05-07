__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 60,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 60,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 51,
            "end": 58,
            "argument": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "method",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 40,
          "decorators": [],
          "name": "iterable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 40,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 40,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 37,
                "end": 40,
                "params": [
                  {
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
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 37,
                "decorators": [],
                "name": "Iterable",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 41,
        "end": 44,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 43,
          "end": 44,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
      "type": "VariableDeclaration",
      "start": 62,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 77,
            "decorators": [],
            "name": "res",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 80,
            "end": 94,
            "arguments": [
              {
                "type": "Literal",
                "start": 87,
                "end": 93,
                "raw": "\"test\"",
                "value": "test",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
