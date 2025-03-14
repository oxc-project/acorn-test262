callChainInference.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 201,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 34,
        "end": 108,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 40,
            "end": 76,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 54,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 53,
                    "end": 54,
                    "typeName": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 56,
                "end": 68,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 59,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 61,
                    "end": 68,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 67,
                      "end": 68,
                      "typeName": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 75,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 71,
                "end": 75
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 43,
              "end": 46,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 44,
                  "end": 45,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
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
            "type": "TSPropertySignature",
            "start": 81,
            "end": 91,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 84,
                "end": 90
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 106,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 105,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "Y",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 144,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 144,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 131,
                "end": 144,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 131,
                    "end": 132,
                    "typeName": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "decorators": [],
                      "name": "Y",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 135,
                    "end": 144
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 147,
      "end": 182,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 158,
        "end": 182,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 164,
            "end": 180,
            "expression": {
              "type": "ChainExpression",
              "start": 164,
              "end": 179,
              "expression": {
                "type": "CallExpression",
                "start": 164,
                "end": 179,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 175,
                    "end": 178,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 164,
                  "end": 174,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 169,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 174,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 151,
        "end": 156,
        "decorators": [],
        "name": "value",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 200,
      "expression": {
        "type": "ChainExpression",
        "start": 184,
        "end": 199,
        "expression": {
          "type": "CallExpression",
          "start": 184,
          "end": 199,
          "arguments": [
            {
              "type": "Literal",
              "start": 195,
              "end": 198,
              "raw": "\"a\"",
              "value": "a"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 184,
            "end": 194,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 184,
              "end": 189,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
