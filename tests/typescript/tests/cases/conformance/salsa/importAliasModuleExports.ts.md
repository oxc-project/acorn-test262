__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Alias",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 38,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 36,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 36,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 24,
                "end": 36,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 26,
                    "end": 34,
                    "argument": {
                      "type": "Literal",
                      "start": 33,
                      "end": 34,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 62,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 61,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 39,
          "end": 53,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 53,
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
          "start": 56,
          "end": 61,
          "decorators": [],
          "name": "Alias",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
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
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "value": "./mod1",
        "raw": "'./mod1'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 42,
      "expression": {
        "type": "AssignmentExpression",
        "start": 23,
        "end": 42,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 23,
          "end": 38,
          "object": {
            "type": "MemberExpression",
            "start": 23,
            "end": 34,
            "object": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 25,
              "end": 34,
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
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 41,
          "end": 42,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 92,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 43,
          "end": 59,
          "object": {
            "type": "MemberExpression",
            "start": 43,
            "end": 54,
            "object": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 45,
              "end": 54,
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
            "start": 55,
            "end": 59,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 62,
          "end": 92,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 73,
            "end": 92,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 75,
                "end": 90,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 75,
                  "end": 89,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 75,
                    "end": 85,
                    "object": {
                      "type": "ThisExpression",
                      "start": 75,
                      "end": 79
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 85,
                      "decorators": [],
                      "name": "_func",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 88,
                    "end": 89,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "directive": null
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
      "start": 93,
      "end": 149,
      "expression": {
        "type": "CallExpression",
        "start": 93,
        "end": 148,
        "callee": {
          "type": "MemberExpression",
          "start": 93,
          "end": 114,
          "object": {
            "type": "Identifier",
            "start": 93,
            "end": 99,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 100,
            "end": 114,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 115,
            "end": 126,
            "object": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 117,
              "end": 126,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "Literal",
            "start": 128,
            "end": 133,
            "value": "def",
            "raw": "\"def\""
          },
          {
            "type": "ObjectExpression",
            "start": 135,
            "end": 147,
            "properties": [
              {
                "type": "Property",
                "start": 137,
                "end": 145,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 142,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 144,
                  "end": 145,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 161,
      "expression": {
        "type": "MemberExpression",
        "start": 150,
        "end": 161,
        "object": {
          "type": "NewExpression",
          "start": 150,
          "end": 157,
          "callee": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "Identifier",
          "start": 158,
          "end": 161,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 173,
      "expression": {
        "type": "MemberExpression",
        "start": 162,
        "end": 173,
        "object": {
          "type": "NewExpression",
          "start": 162,
          "end": 169,
          "callee": {
            "type": "Identifier",
            "start": 166,
            "end": 167,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "Identifier",
          "start": 170,
          "end": 173,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 174,
        "end": 188,
        "callee": {
          "type": "MemberExpression",
          "start": 174,
          "end": 186,
          "object": {
            "type": "NewExpression",
            "start": 174,
            "end": 181,
            "callee": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 186,
            "decorators": [],
            "name": "func",
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
      "start": 189,
      "end": 200,
      "expression": {
        "type": "MemberExpression",
        "start": 189,
        "end": 200,
        "object": {
          "type": "NewExpression",
          "start": 189,
          "end": 196,
          "callee": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "Identifier",
          "start": 197,
          "end": 200,
          "decorators": [],
          "name": "def",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
