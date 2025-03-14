__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 286,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 124,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 80,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 37,
                "end": 44,
                "expression": {
                  "type": "CallExpression",
                  "start": 38,
                  "end": 44,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 42,
                      "end": 43,
                      "raw": "1",
                      "value": 1
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 41,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 56,
              "end": 64,
              "name": "method1"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 80,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 80,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 69,
                    "end": 78,
                    "argument": {
                      "type": "Literal",
                      "start": 76,
                      "end": 77,
                      "raw": "0",
                      "value": 0
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
          },
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 122,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 85,
                "end": 92,
                "expression": {
                  "type": "CallExpression",
                  "start": 86,
                  "end": 92,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 90,
                      "end": 91,
                      "raw": "2",
                      "value": 2
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 89,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 104,
              "end": 112,
              "name": "method1"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 122,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 122,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 118,
                  "decorators": [],
                  "name": "value",
                  "optional": false
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
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 285,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 285,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 180,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 156,
              "end": 164,
              "name": "method1"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 180,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 167,
                "end": 180,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 169,
                    "end": 178,
                    "argument": {
                      "type": "Literal",
                      "start": 176,
                      "end": 177,
                      "raw": "0",
                      "value": 0
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
          },
          {
            "type": "MethodDefinition",
            "start": 185,
            "end": 214,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 196,
              "end": 204,
              "name": "method1"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 204,
              "end": 214,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 212,
                "end": 214,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 205,
                  "end": 210,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "StaticBlock",
            "start": 219,
            "end": 283,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 236,
                "end": 250,
                "expression": {
                  "type": "MemberExpression",
                  "start": 236,
                  "end": 249,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 236,
                    "end": 240
                  },
                  "optional": false,
                  "property": {
                    "type": "PrivateIdentifier",
                    "start": 241,
                    "end": 249,
                    "name": "method1"
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 259,
                "end": 277,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 259,
                  "end": 276,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 259,
                    "end": 272,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 259,
                      "end": 263
                    },
                    "optional": false,
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 264,
                      "end": 272,
                      "name": "method1"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 275,
                    "end": 276,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 126,
          "end": 130,
          "expression": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 138,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
