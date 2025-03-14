__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 52,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 52,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 52,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 38,
                    "end": 50,
                    "argument": {
                      "type": "Literal",
                      "start": 45,
                      "end": 49,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 26,
                  "end": 35,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 30,
                    "end": 35,
                    "params": [
                      {
                        "type": "TSArrayType",
                        "start": 31,
                        "end": 34,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 31,
                          "end": 32,
                          "typeName": {
                            "type": "Identifier",
                            "start": 31,
                            "end": 32,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 30,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
      "type": "ClassDeclaration",
      "start": 57,
      "end": 89,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 89,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 83,
            "end": 84,
            "typeName": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
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
      "start": 92,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 100,
            "decorators": [],
            "name": "test",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 103,
            "end": 120,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 110,
              "end": 118,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 111,
                  "end": 117
                }
              ]
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
