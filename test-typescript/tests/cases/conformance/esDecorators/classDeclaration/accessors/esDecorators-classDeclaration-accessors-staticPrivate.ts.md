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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 80,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 56,
              "end": 64,
              "name": "method1"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 80,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 37,
                "end": 44,
                "expression": {
                  "type": "CallExpression",
                  "start": 38,
                  "end": 44,
                  "callee": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 41,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 42,
                      "end": 43,
                      "value": 1,
                      "raw": "1"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 122,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 104,
              "end": 112,
              "name": "method1"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 122,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 118,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 122,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 85,
                "end": 92,
                "expression": {
                  "type": "CallExpression",
                  "start": 86,
                  "end": 92,
                  "callee": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 89,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 90,
                      "end": 91,
                      "value": 2,
                      "raw": "2"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 138,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 285,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 180,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 156,
              "end": 164,
              "name": "method1"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 180,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 185,
            "end": 214,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 196,
              "end": 204,
              "name": "method1"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 204,
              "end": 214,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 205,
                  "end": 210,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 212,
                "end": 214,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
                  "object": {
                    "type": "ThisExpression",
                    "start": 236,
                    "end": 240
                  },
                  "property": {
                    "type": "PrivateIdentifier",
                    "start": 241,
                    "end": 249,
                    "name": "method1"
                  },
                  "computed": false,
                  "optional": false
                },
                "directive": null
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
                    "object": {
                      "type": "ThisExpression",
                      "start": 259,
                      "end": 263
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 264,
                      "end": 272,
                      "name": "method1"
                    },
                    "computed": false,
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 275,
                    "end": 276,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 126,
          "end": 130,
          "expression": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
