undefinedAssignableToGenericMappedIntersection.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 84,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Errors",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 17,
        "end": 83,
        "types": [
          {
            "type": "TSMappedType",
            "start": 17,
            "end": 55,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 25,
              "end": 32,
              "operator": "keyof",
              "typeAnnotation": {
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
            },
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 35,
              "end": 53,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 35,
                  "end": 41
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 44,
                  "end": 53
                }
              ]
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 58,
            "end": 83,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 59,
                "end": 82,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "decorators": [],
                  "name": "all",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 82,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 64,
                    "end": 82,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 64,
                        "end": 70
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 73,
                        "end": 82
                      }
                    ]
                  }
                }
              }
            ]
          }
        ]
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
      "start": 85,
      "end": 175,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 103,
        "end": 175,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 109,
            "end": 128,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 113,
                "end": 128,
                "definite": true,
                "id": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 128,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 119,
                      "end": 128,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 125,
                        "end": 128,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 126,
                            "end": 127,
                            "typeName": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 127,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 125,
                        "decorators": [],
                        "name": "Errors",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 149,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 148,
                "definite": true,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 148,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 148,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 141,
                      "end": 148,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 147,
                        "end": 148,
                        "typeName": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 148,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 173,
            "expression": {
              "type": "AssignmentExpression",
              "start": 154,
              "end": 172,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 154,
                "end": 160,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 163,
                "end": 172,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 99,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "T",
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
