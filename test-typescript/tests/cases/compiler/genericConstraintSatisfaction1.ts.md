genericConstraintSatisfaction1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 50,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 50,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 23,
                "end": 50,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 37,
                    "end": 41,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 40,
                        "end": 41,
                        "typeName": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 41,
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
                  "start": 43,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 46,
                    "end": 50
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 23,
                  "end": 36,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 24,
                      "end": 35,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 34,
                        "end": 35,
                        "typeName": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 35,
                          "decorators": [],
                          "name": "S",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 25,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 76,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 63,
                  "end": 76,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 64,
                      "end": 75,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 65,
                          "end": 74,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "decorators": [],
                            "name": "s",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 66,
                            "end": 74,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 68,
                              "end": 74
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 88,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 88,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 81,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 82,
                "end": 86,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 85,
                  "end": 86,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 80,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
