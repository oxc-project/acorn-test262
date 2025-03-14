wrappedAndRecursiveConstraints2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 62,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 62,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 60,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 50,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 60,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 54,
                      "end": 55,
                      "typeName": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 22,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 22,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 19,
                "end": 22,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 20,
                    "end": 21,
                    "typeName": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 72,
            "end": 80,
            "arguments": [
              {
                "type": "Literal",
                "start": 78,
                "end": 79,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 90,
            "end": 106,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 96,
                "end": 105,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 102,
                    "end": 104,
                    "raw": "''",
                    "value": ""
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
