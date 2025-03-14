superWithGenerics.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 68,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 42,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 30,
              "end": 42,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 37,
                  "end": 41,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 38,
                    "end": 41,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 39,
                        "end": 40,
                        "typeName": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 40,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 30,
                "end": 33,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 31,
                    "end": 32,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 66,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 55,
              "end": 66,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 57,
                "end": 65,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 59,
                  "end": 65,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 60,
                    "end": 65,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 61,
                        "end": 64
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
      "start": 70,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 138,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 110,
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
              "start": 110,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 138,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 123,
                    "end": 131,
                    "expression": {
                      "type": "CallExpression",
                      "start": 123,
                      "end": 130,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 123,
                        "end": 128
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 87,
        "end": 92,
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 88,
            "end": 91
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
