genericCallSpecializedToTypeArg.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 41,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 41,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 30,
            "end": 39,
            "argument": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "x",
              "optional": false
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
        "end": 13,
        "decorators": [],
        "name": "dupe",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 21,
            "typeAnnotation": {
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
          }
        }
      ],
      "returnType": {
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "type": "FunctionDeclaration",
      "start": 42,
      "end": 228,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 228,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 82,
            "end": 98,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 86,
                "end": 97,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 90,
                  "end": 97,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 94,
                    "decorators": [],
                    "name": "dupe",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 136,
            "end": 148,
            "expression": {
              "type": "CallExpression",
              "start": 136,
              "end": 147,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 136,
                "end": 145,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 145,
                  "decorators": [],
                  "name": "getDist",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 217,
            "end": 226,
            "argument": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 65,
        "decorators": [],
        "name": "dupeAndGetDist",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 69,
          "end": 73,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 70,
            "end": 73,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 74,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 76,
          "end": 77,
          "typeName": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 65,
        "end": 68,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 67,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
