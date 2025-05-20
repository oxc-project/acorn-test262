__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 269,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 14,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 42,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 42,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 15,
          "end": 26,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 15,
            "end": 20,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 21,
            "end": 26,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 29,
          "end": 42,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 40,
            "end": 42,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 92,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 92,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 43,
          "end": 64,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 43,
            "end": 54,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 43,
              "end": 48,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 54,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 64,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 67,
          "end": 92,
          "properties": [
            {
              "type": "Property",
              "start": 73,
              "end": 80,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 74,
                "end": 80,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 77,
                  "end": 80,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "Property",
              "start": 86,
              "end": 90,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "raw": "1",
                "value": 1
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 158,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 131,
        "end": 158,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 131,
          "end": 154,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 131,
            "end": 152,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 131,
              "end": 142,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 136,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 137,
                "end": 142,
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 143,
              "end": 152,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 157,
          "end": 158,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 205,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 181,
        "end": 204,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 181,
          "end": 202,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 181,
            "end": 192,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 181,
              "end": 186,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 187,
              "end": 192,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 193,
            "end": 202,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 203,
          "end": 204,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 215,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 218,
            "end": 235,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 222,
              "end": 233,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 222,
                "end": 227,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 228,
                "end": 233,
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 245,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 236,
        "end": 245,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 236,
          "end": 243,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 236,
            "end": 241,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 246,
      "end": 253,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 246,
        "end": 253,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 246,
          "end": 251,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 252,
          "end": 253,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 261,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 254,
        "end": 261,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 254,
          "end": 259,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 260,
          "end": 261,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 269,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 262,
        "end": 269,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 262,
          "end": 267,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 268,
          "end": 269,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
