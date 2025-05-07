__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 47,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 47,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 36,
            "end": 45,
            "argument": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
        "end": 17,
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 25,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 25,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 25,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 26,
        "end": 29,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 28,
          "end": 29,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "A",
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
      "start": 48,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 56,
            "end": 82,
            "computed": true,
            "object": {
              "type": "CallExpression",
              "start": 56,
              "end": 79,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 78,
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 56,
                "end": 69,
                "computed": false,
                "object": {
                  "type": "ArrayExpression",
                  "start": 56,
                  "end": 65,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 57,
                      "end": 58,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 60,
                      "end": 61,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 63,
                      "end": 64,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 80,
              "end": 81,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
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
