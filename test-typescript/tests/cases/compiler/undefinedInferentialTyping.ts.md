__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 58,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 58,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 44,
            "end": 56,
            "argument": {
              "type": "Literal",
              "start": 51,
              "end": 55,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 22,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 22,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 19,
              "end": 22,
              "elementType": {
                "type": "TSTypeReference",
                "start": 19,
                "end": 20,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "elemnt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 33,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 33,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
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
        "start": 34,
        "end": 37,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 36,
          "end": 37,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "start": 60,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 68,
            "end": 76,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 70,
                "end": 72,
                "elements": []
              },
              {
                "type": "Literal",
                "start": 74,
                "end": 75,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
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
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
