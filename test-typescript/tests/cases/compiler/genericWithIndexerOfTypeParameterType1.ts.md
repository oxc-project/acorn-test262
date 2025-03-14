genericWithIndexerOfTypeParameterType1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 125,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 125,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 74,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 40,
              "decorators": [],
              "name": "objects",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "TSTypeAssertion",
              "start": 43,
              "end": 73,
              "expression": {
                "type": "ObjectExpression",
                "start": 71,
                "end": 73,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 44,
                "end": 70,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 46,
                    "end": 68,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 47,
                        "end": 63,
                        "decorators": [],
                        "name": "objectId",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 55,
                          "end": 63,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 57,
                            "end": 63
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 67,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 66,
                        "end": 67,
                        "typeName": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
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
          },
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 123,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 84,
              "decorators": [],
              "name": "array",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 123,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 123,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 97,
                    "end": 117,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 116,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 104,
                        "end": 108
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 116,
                        "decorators": [],
                        "name": "objects",
                        "optional": false
                      }
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
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "LazyArray",
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
      "type": "VariableDeclaration",
      "start": 126,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 165,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 139,
            "decorators": [],
            "name": "lazyArray",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 142,
            "end": 165,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 155,
              "decorators": [],
              "name": "LazyArray",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 155,
              "end": 163,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 156,
                  "end": 162
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 167,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 212,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 184,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 212,
            "computed": true,
            "object": {
              "type": "CallExpression",
              "start": 187,
              "end": 204,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 187,
                "end": 202,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 196,
                  "decorators": [],
                  "name": "lazyArray",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 202,
                  "decorators": [],
                  "name": "array",
                  "optional": false
                }
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 205,
              "end": 211,
              "raw": "\"test\"",
              "value": "test"
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
