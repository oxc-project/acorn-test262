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
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "left": {
                "type": "Identifier",
                "start": 58,
                "end": 59,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 68,
      "end": 121,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 121,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 119,
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
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 119,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "start": 123,
      "end": 166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 123,
        "end": 166,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 123,
          "end": 137,
          "object": {
            "type": "Identifier",
            "start": 123,
            "end": 129,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 137,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 155,
              "end": 164,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 155,
                "end": 164,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 155,
                "end": 164,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
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
  "end": 108,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 59,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 58,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 39,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 17,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 17,
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 17,
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 19,
                "end": 37,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 28,
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 37,
                  "decorators": [],
                  "name": "Another",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 42,
            "end": 58,
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 49,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 50,
                "end": 57,
                "value": "./lib",
                "raw": "'./lib'"
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
      "start": 61,
      "end": 108,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 108,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 61,
          "end": 75,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 67,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 75,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 93,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 84,
                "end": 93,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 99,
              "end": 106,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 99,
                "end": 106,
                "decorators": [],
                "name": "Another",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 99,
                "end": 106,
                "decorators": [],
                "name": "Another",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
