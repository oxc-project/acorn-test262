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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "name": "identity",
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
          "start": 21,
          "end": 25,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 25,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 25,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "A",
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "A",
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
        "start": 26,
        "end": 29,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 28,
          "end": 29,
          "typeName": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "A",
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
      "start": 48,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 56,
            "end": 82,
            "object": {
              "type": "CallExpression",
              "start": 56,
              "end": 79,
              "callee": {
                "type": "MemberExpression",
                "start": 56,
                "end": 69,
                "object": {
                  "type": "ArrayExpression",
                  "start": 56,
                  "end": 65,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 57,
                      "end": 58,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 60,
                      "end": 61,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 63,
                      "end": 64,
                      "value": 3,
                      "raw": "3"
                    }
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 78,
                  "name": "identity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Literal",
              "start": 80,
              "end": 81,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
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
