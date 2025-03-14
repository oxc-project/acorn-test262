__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 92,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 92,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 73,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 72,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 52,
                  "end": 72,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 68,
                      "end": 71,
                      "raw": "123",
                      "value": 123
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 52,
                    "end": 67,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 67,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 78,
            "end": 90,
            "argument": {
              "type": "Literal",
              "start": 85,
              "end": 89,
              "raw": "null",
              "value": null
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
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 33,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 33,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 33,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "A",
                "optional": false
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
          "typeName": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 27,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 21,
              "end": 27,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 27,
                "decorators": [],
                "name": "Number",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "A",
              "optional": false
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
