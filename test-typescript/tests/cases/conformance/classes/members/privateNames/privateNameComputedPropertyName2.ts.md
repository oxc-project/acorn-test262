__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "decorators": [],
            "name": "getX",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 26,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 10,
                "end": 26,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 11,
                    "end": 15,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 15,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14,
                        "end": 15,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14,
                          "end": 15,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 17,
                  "end": 26,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
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
      "type": "ClassDeclaration",
      "start": 29,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 37,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 43,
            "end": 52,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 43,
              "end": 45,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 48,
              "end": 51,
              "raw": "100",
              "value": 100
            }
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 92,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "SequenceExpression",
              "start": 59,
              "end": 85,
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "start": 59,
                  "end": 80,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 63,
                    "decorators": [],
                    "name": "getX",
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 66,
                    "end": 80,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 76,
                      "end": 80,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 77,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 78,
                        "end": 80,
                        "name": "x"
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 71,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 68,
                          "end": 71,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 70,
                            "end": 71,
                            "typeName": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 71,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "Literal",
                  "start": 82,
                  "end": 85,
                  "raw": "\"_\"",
                  "value": "_"
                }
              ]
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 92,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 92,
                "body": []
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
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 121,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 120,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 108,
            "end": 119,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 113,
                "end": 118,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 112,
              "decorators": [],
              "name": "getX",
              "optional": false
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 96,
          "end": 107,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 96,
            "end": 103,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 104,
            "end": 107,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
