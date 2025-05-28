__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 50,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 49,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 49,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 272,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 63,
      "expression": {
        "type": "AssignmentExpression",
        "start": 37,
        "end": 63,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 37,
          "end": 51,
          "object": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 54,
          "end": 63,
          "decorators": [],
          "name": "minimatch",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 79,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 64,
          "end": 75,
          "object": {
            "type": "Identifier",
            "start": 64,
            "end": 73,
            "decorators": [],
            "name": "minimatch",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 80,
        "end": 105,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 80,
          "end": 96,
          "object": {
            "type": "Identifier",
            "start": 80,
            "end": 89,
            "decorators": [],
            "name": "minimatch",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 90,
            "end": 96,
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 99,
          "end": 105,
          "decorators": [],
          "name": "filter",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 121,
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 124,
        "end": 150,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 130,
            "end": 148,
            "argument": {
              "type": "CallExpression",
              "start": 137,
              "end": 148,
              "callee": {
                "type": "Identifier",
                "start": 137,
                "end": 146,
                "decorators": [],
                "name": "minimatch",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 151,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 169,
        "decorators": [],
        "name": "minimatch",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 172,
        "end": 175,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 222,
      "expression": {
        "type": "AssignmentExpression",
        "start": 176,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 176,
          "end": 186,
          "object": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 178,
            "end": 186,
            "decorators": [],
            "name": "defaults",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 189,
          "end": 222,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 199,
              "end": 202,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 204,
            "end": 222,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 210,
                "end": 220,
                "argument": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 220,
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 254,
      "expression": {
        "type": "AssignmentExpression",
        "start": 223,
        "end": 254,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 223,
          "end": 236,
          "object": {
            "type": "MemberExpression",
            "start": 223,
            "end": 234,
            "object": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 225,
              "end": 234,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 239,
          "end": 254,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 251,
            "end": 254,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 255,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 265,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 268,
        "end": 271,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 129,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 70,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "mini",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 48,
            "end": 70,
            "callee": {
              "type": "Identifier",
              "start": 48,
              "end": 55,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 56,
                "end": 69,
                "value": "./minimatch",
                "raw": "'./minimatch'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 88,
      "expression": {
        "type": "CallExpression",
        "start": 71,
        "end": 88,
        "callee": {
          "type": "MemberExpression",
          "start": 71,
          "end": 86,
          "object": {
            "type": "MemberExpression",
            "start": 71,
            "end": 77,
            "object": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
              "decorators": [],
              "name": "mini",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 78,
            "end": 86,
            "decorators": [],
            "name": "defaults",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 109,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 97,
            "end": 109,
            "callee": {
              "type": "MemberExpression",
              "start": 101,
              "end": 107,
              "object": {
                "type": "Identifier",
                "start": 101,
                "end": 105,
                "decorators": [],
                "name": "mini",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 115,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 115,
        "callee": {
          "type": "MemberExpression",
          "start": 110,
          "end": 113,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 129,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 129,
        "callee": {
          "type": "MemberExpression",
          "start": 116,
          "end": 127,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 120,
            "decorators": [],
            "name": "mini",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 127,
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
