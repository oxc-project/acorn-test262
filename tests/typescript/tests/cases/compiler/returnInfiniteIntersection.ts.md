__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "recursive",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 18
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 32
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 36,
                          "end": 37
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 36,
                        "end": 37
                      }
                    ],
                    "start": 35,
                    "end": 38
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "subkey",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 47,
                            "end": 48
                          },
                          "typeArguments": null,
                          "start": 47,
                          "end": 48
                        },
                        "start": 45,
                        "end": 48
                      },
                      "start": 39,
                      "end": 48
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "recursive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 62
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 53,
                    "end": 64
                  },
                  "id": null,
                  "generator": false,
                  "start": 35,
                  "end": 64
                },
                "definite": false,
                "start": 31,
                "end": 64
              }
            ],
            "declare": false,
            "start": 27,
            "end": 65
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 78
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 90
                    },
                    "typeArguments": null,
                    "start": 82,
                    "end": 90
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 96
                        },
                        "typeAnnotation": null,
                        "accessibility": null,
                        "static": false,
                        "start": 95,
                        "end": 96
                      }
                    ],
                    "start": 93,
                    "end": 98
                  }
                ],
                "start": 82,
                "end": 98
              },
              "start": 77,
              "end": 98
            },
            "start": 70,
            "end": 99
          }
        ],
        "start": 21,
        "end": 101
      },
      "expression": false,
      "start": 0,
      "end": 101
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 113
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "recursive",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 125
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 116,
              "end": 127
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 128,
                "end": 129
              }
            ],
            "optional": false,
            "start": 116,
            "end": 130
          },
          "definite": false,
          "start": 107,
          "end": 130
        }
      ],
      "declare": false,
      "start": 103,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 130
}
```
