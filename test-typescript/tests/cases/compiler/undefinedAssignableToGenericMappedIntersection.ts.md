__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "name": "Errors",
        "typeAnnotation": null,
        "decorators": [],
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
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 17,
        "end": 83,
        "types": [
          {
            "type": "TSMappedType",
            "start": 17,
            "end": 55,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 20,
              "end": 32,
              "name": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
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
            },
            "optional": null,
            "readonly": null,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "name": "all",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "name": "foo",
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
                "id": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 128,
                  "name": "obj",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 119,
                      "end": 128,
                      "typeName": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 125,
                        "name": "Errors",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": true
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 148,
                  "name": "x",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": true
              }
            ],
            "kind": "let",
            "declare": false
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
                "object": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 163,
                "end": 172,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 99,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
