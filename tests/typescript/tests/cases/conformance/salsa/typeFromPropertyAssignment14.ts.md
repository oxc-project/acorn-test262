__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 12,
            "end": 14
          },
          "definite": false,
          "start": 4,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 16
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 5
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 11
        },
        "right": {
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
            "body": [],
            "start": 26,
            "end": 28
          },
          "expression": false,
          "start": 14,
          "end": 28
        },
        "start": 0,
        "end": 28
      },
      "directive": null,
      "start": 0,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 34
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 40
            },
            "optional": false,
            "computed": false,
            "start": 29,
            "end": 40
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 50
          },
          "optional": false,
          "computed": false,
          "start": 29,
          "end": 50
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 60
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 62,
                "end": 63
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 59,
              "end": 63
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 70
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
                  "body": [],
                  "start": 73,
                  "end": 76
                },
                "expression": false,
                "start": 70,
                "end": 76
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 69,
              "end": 76
            }
          ],
          "start": 53,
          "end": 78
        },
        "start": 29,
        "end": 78
      },
      "directive": null,
      "start": 29,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 79
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 36
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 36
        }
      ],
      "declare": false,
      "start": 27,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 42
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 44
        },
        "optional": false,
        "computed": false,
        "start": 37,
        "end": 44
      },
      "directive": null,
      "start": 37,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 50
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 52
          },
          "optional": false,
          "computed": false,
          "start": 45,
          "end": 52
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 45,
        "end": 54
      },
      "directive": null,
      "start": 45,
      "end": 54
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "inno",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 63
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 75
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 81
              },
              "optional": false,
              "computed": false,
              "start": 70,
              "end": 81
            },
            "typeArguments": null,
            "arguments": [],
            "start": 66,
            "end": 83
          },
          "definite": false,
          "start": 59,
          "end": 83
        }
      ],
      "declare": false,
      "start": 55,
      "end": 83
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "inno",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 88
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 90
        },
        "optional": false,
        "computed": false,
        "start": 84,
        "end": 90
      },
      "directive": null,
      "start": 84,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "inno",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 95
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "optional": false,
          "computed": false,
          "start": 91,
          "end": 97
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 91,
        "end": 99
      },
      "directive": null,
      "start": 91,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 27,
  "end": 101
}
```
