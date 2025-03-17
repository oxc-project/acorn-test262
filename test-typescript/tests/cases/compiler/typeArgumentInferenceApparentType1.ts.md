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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "method",
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
          "start": 19,
          "end": 40,
          "name": "iterable",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 40,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 40,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 37,
                "name": "Iterable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 37,
                "end": 40,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 38,
                    "end": 39,
                    "typeName": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
        "start": 41,
        "end": 44,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 43,
          "end": 44,
          "typeName": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 77,
            "name": "res",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 80,
            "end": 94,
            "callee": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 87,
                "end": 93,
                "value": "test",
                "raw": "\"test\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
