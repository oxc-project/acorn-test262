__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 41
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 43
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 59
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 63
              },
              "start": 58,
              "end": 63
            },
            "start": 51,
            "end": 64
          }
        ],
        "start": 45,
        "end": 66
      },
      "expression": false,
      "start": 29,
      "end": 66
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 83
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 111,
                      "end": 112
                    },
                    "start": 104,
                    "end": 113
                  }
                ],
                "start": 94,
                "end": 119
              },
              "expression": false,
              "start": 91,
              "end": 119
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 90,
            "end": 119
          }
        ],
        "start": 84,
        "end": 121
      },
      "abstract": false,
      "declare": false,
      "start": 68,
      "end": 121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 129
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 123,
          "end": 137
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 146,
              "end": 149
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 164
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 164
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 155,
              "end": 164
            }
          ],
          "start": 140,
          "end": 166
        },
        "start": 123,
        "end": 166
      },
      "directive": null,
      "start": 123,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 29,
  "end": 166
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 17
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 17
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 8,
                "end": 17
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SomeClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 28
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Another",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 37
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 19,
                "end": 37
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 39
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 49
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./lib",
                "raw": "'./lib'",
                "start": 50,
                "end": 57
              }
            ],
            "optional": false,
            "start": 42,
            "end": 58
          },
          "definite": false,
          "start": 6,
          "end": 58
        }
      ],
      "declare": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 67
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 75
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 75
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 93
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 93
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 84,
              "end": 93
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Another",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 106
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Another",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 106
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 99,
              "end": 106
            }
          ],
          "start": 78,
          "end": 108
        },
        "start": 61,
        "end": 108
      },
      "directive": null,
      "start": 61,
      "end": 108
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
