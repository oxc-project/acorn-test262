__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 166,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 29,
      "end": 66,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 66,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 51,
            "end": 64,
            "argument": {
              "type": "BinaryExpression",
              "start": 58,
              "end": 63,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 58,
                "end": 59,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 42,
          "end": 43,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 68,
      "end": 121,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 121,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 119,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 119,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 119,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 104,
                    "end": 113,
                    "argument": {
                      "type": "Literal",
                      "start": 111,
                      "end": 112,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 83,
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 166,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 123,
        "end": 166,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 123,
          "end": 137,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 123,
            "end": 129,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 137,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 140,
          "end": 166,
          "properties": [
            {
              "type": "Property",
              "start": 146,
              "end": 149,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 155,
              "end": 164,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 155,
                "end": 164,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 155,
                "end": 164,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
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
  "end": 108,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 58,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 39,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 17,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 17,
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 17,
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 19,
                "end": 37,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 28,
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "decorators": [],
                  "name": "Another",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 42,
            "end": 58,
            "arguments": [
              {
                "type": "Literal",
                "start": 50,
                "end": 57,
                "raw": "'./lib'",
                "value": "./lib",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 49,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 108,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 108,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 61,
          "end": 75,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 67,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 75,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 78,
          "end": 108,
          "properties": [
            {
              "type": "Property",
              "start": 84,
              "end": 93,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 93,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 84,
                "end": 93,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 99,
              "end": 106,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 106,
                "decorators": [],
                "name": "Another",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 99,
                "end": 106,
                "decorators": [],
                "name": "Another",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
