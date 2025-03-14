__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 29,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 29,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 27,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 26,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 25,
                  "end": 26,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 37,
            "end": 40,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 71,
            "decorators": [],
            "name": "why",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 71,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 68,
                "end": 71
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 72,
            "end": 75,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 103,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 103,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 100,
                "end": 103
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
      "start": 105,
      "end": 111,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 110,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "decorators": [],
          "name": "w",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 107,
          "end": 110,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 166,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 138,
        "end": 166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 144,
            "end": 164,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 164,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 164,
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
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 174,
            "end": 185,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 174,
              "end": 183,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 174,
                "end": 181,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "g",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "N",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 210,
            "end": 217,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
