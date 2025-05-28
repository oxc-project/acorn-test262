__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
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
            "type": "FunctionExpression",
            "start": 12,
            "end": 40,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 28,
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 30,
                "end": 36,
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 40,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
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
  "start": 20,
  "end": 147,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 55,
      "expression": {
        "type": "AssignmentExpression",
        "start": 20,
        "end": 54,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 20,
          "end": 29,
          "object": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 26,
            "end": 29,
            "decorators": [],
            "name": "Pos",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 32,
          "end": 54,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "line",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 48,
              "end": 50,
              "decorators": [],
              "name": "ch",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 52,
            "end": 54,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 103,
      "expression": {
        "type": "MemberExpression",
        "start": 78,
        "end": 102,
        "object": {
          "type": "MemberExpression",
          "start": 78,
          "end": 97,
          "object": {
            "type": "MemberExpression",
            "start": 78,
            "end": 87,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "decorators": [],
              "name": "Pos",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 97,
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
          "start": 98,
          "end": 102,
          "decorators": [],
          "name": "line",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 136,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 111,
            "decorators": [],
            "name": "pos",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 114,
            "end": 135,
            "callee": {
              "type": "MemberExpression",
              "start": 118,
              "end": 127,
              "object": {
                "type": "Identifier",
                "start": 118,
                "end": 123,
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 124,
                "end": 127,
                "decorators": [],
                "name": "Pos",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 128,
                "end": 129,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 131,
                "end": 134,
                "value": "x",
                "raw": "'x'"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 146,
      "expression": {
        "type": "MemberExpression",
        "start": 137,
        "end": 145,
        "object": {
          "type": "Identifier",
          "start": 137,
          "end": 140,
          "decorators": [],
          "name": "pos",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 141,
          "end": 145,
          "decorators": [],
          "name": "line",
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
