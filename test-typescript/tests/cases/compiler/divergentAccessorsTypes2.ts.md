__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 97,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 97,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 56,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 56,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 56,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 36,
                    "end": 54,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 43,
                      "end": 54,
                      "expression": {
                        "type": "Literal",
                        "start": 43,
                        "end": 47,
                        "raw": "null",
                        "value": null
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 51,
                        "end": 54
                      }
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
                "start": 30,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 32,
                  "end": 33,
                  "typeName": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 61,
            "end": 95,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 95,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 88,
                "end": 95,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 69,
                  "end": 85,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 70,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 72,
                      "end": 85,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 72,
                          "end": 73,
                          "typeName": {
                            "type": "Identifier",
                            "start": 72,
                            "end": 73,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 76,
                          "end": 85
                        }
                      ]
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
        "end": 11,
        "decorators": [],
        "name": "Test1",
        "optional": false
      },
      "implements": [],
      "superClass": null,
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
      "type": "VariableDeclaration",
      "start": 99,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 109,
            "end": 128,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 113,
              "end": 118,
              "decorators": [],
              "name": "Test1",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 118,
              "end": 126,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 119,
                  "end": 125
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 130,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 130,
          "end": 135,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 135,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 138,
          "end": 147,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 165,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 164,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 149,
          "end": 154,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 151,
            "end": 154,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 157,
          "end": 164,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 177,
      "expression": {
        "type": "AssignmentExpression",
        "start": 166,
        "end": 176,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 166,
          "end": 171,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 168,
            "end": 171,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 174,
          "end": 176,
          "raw": "42",
          "value": 42
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
