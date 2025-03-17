__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "name": "recursive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 101,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 65,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 64,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 35,
                  "end": 64,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 39,
                      "end": 48,
                      "name": "subkey",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 45,
                        "end": 48,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 47,
                          "end": 48,
                          "typeName": {
                            "type": "Identifier",
                            "start": 47,
                            "end": 48,
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
                    "type": "CallExpression",
                    "start": 53,
                    "end": 64,
                    "callee": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 62,
                      "name": "recursive",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 35,
                    "end": 38,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 36,
                        "end": 37,
                        "name": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 37,
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 70,
            "end": 99,
            "argument": {
              "type": "TSAsExpression",
              "start": 77,
              "end": 98,
              "expression": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 82,
                "end": 98,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 82,
                    "end": 90,
                    "exprName": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 93,
                    "end": 98,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 95,
                        "end": 96,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": null,
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 116,
            "end": 130,
            "callee": {
              "type": "CallExpression",
              "start": 116,
              "end": 127,
              "callee": {
                "type": "Identifier",
                "start": 116,
                "end": 125,
                "name": "recursive",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 128,
                "end": 129,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
