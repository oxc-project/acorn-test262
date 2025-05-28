__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 196,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 45,
      "expression": {
        "type": "AssignmentExpression",
        "start": 17,
        "end": 45,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 17,
          "end": 28,
          "object": {
            "type": "Identifier",
            "start": 17,
            "end": 22,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 28,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 31,
          "end": 45,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 43,
            "end": 45,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 95,
      "expression": {
        "type": "AssignmentExpression",
        "start": 46,
        "end": 95,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 46,
          "end": 67,
          "object": {
            "type": "MemberExpression",
            "start": 46,
            "end": 57,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 51,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 52,
              "end": 57,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 67,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 70,
          "end": 95,
          "properties": [
            {
              "type": "Property",
              "start": 76,
              "end": 80,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 79,
                "end": 80,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 86,
              "end": 93,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 87,
                "end": 93,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 90,
                  "end": 93,
                  "body": []
                },
                "expression": false
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 133,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 133,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 141,
      "expression": {
        "type": "MemberExpression",
        "start": 134,
        "end": 141,
        "object": {
          "type": "Identifier",
          "start": 134,
          "end": 139,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "decorators": [],
          "name": "x",
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
      "start": 142,
      "end": 151,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 151,
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 149,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 147,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
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
      "type": "VariableDeclaration",
      "start": 152,
      "end": 180,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "decorators": [],
            "name": "inno",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 163,
            "end": 180,
            "callee": {
              "type": "MemberExpression",
              "start": 167,
              "end": 178,
              "object": {
                "type": "Identifier",
                "start": 167,
                "end": 172,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 173,
                "end": 178,
                "decorators": [],
                "name": "Inner",
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
      "start": 181,
      "end": 187,
      "expression": {
        "type": "MemberExpression",
        "start": 181,
        "end": 187,
        "object": {
          "type": "Identifier",
          "start": 181,
          "end": 185,
          "decorators": [],
          "name": "inno",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 186,
          "end": 187,
          "decorators": [],
          "name": "x",
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
      "start": 188,
      "end": 196,
      "expression": {
        "type": "CallExpression",
        "start": 188,
        "end": 196,
        "callee": {
          "type": "MemberExpression",
          "start": 188,
          "end": 194,
          "object": {
            "type": "Identifier",
            "start": 188,
            "end": 192,
            "decorators": [],
            "name": "inno",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
