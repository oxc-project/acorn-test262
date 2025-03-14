privateNameConstructorSignature.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
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
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 174,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 174,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 48,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 45,
              "end": 47,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 172,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 64,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 172,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 172,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 77,
                    "end": 93,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 77,
                      "end": 92,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 77,
                        "end": 87,
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "start": 77,
                          "end": 84,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 82,
                            "decorators": [],
                            "name": "C",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 85,
                          "end": 87,
                          "name": "x"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 90,
                        "end": 92,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 102,
                    "end": 120,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 108,
                        "end": 119,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 109,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 112,
                          "end": 119,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 116,
                            "end": 117,
                            "decorators": [],
                            "name": "C",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 129,
                    "end": 147,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 135,
                        "end": 146,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 136,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 139,
                          "end": 146,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 144,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 156,
                    "end": 166,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 156,
                      "end": 165,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 156,
                        "end": 159,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "decorators": [],
                          "name": "z",
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
                        "type": "Literal",
                        "start": 162,
                        "end": 165,
                        "raw": "123",
                        "value": 123
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
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 175,
      "end": 205,
      "body": {
        "type": "TSInterfaceBody",
        "start": 187,
        "end": 205,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 193,
            "end": 203,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "D",
                  "optional": false
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
        "start": 185,
        "end": 186,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
