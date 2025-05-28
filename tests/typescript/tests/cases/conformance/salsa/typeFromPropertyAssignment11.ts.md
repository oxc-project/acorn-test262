__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 228,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 25,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 23,
              "end": 25,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 69,
      "expression": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 69,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 26,
          "end": 41,
          "object": {
            "type": "Identifier",
            "start": 26,
            "end": 31,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 41,
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
          "start": 44,
          "end": 69,
          "properties": [
            {
              "type": "Property",
              "start": 50,
              "end": 57,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 51,
                "end": 57,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 54,
                  "end": 57,
                  "body": []
                },
                "expression": false
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 63,
              "end": 67,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 66,
                "end": 67,
                "value": 1,
                "raw": "1"
              },
              "method": false,
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
      "type": "ExpressionStatement",
      "start": 108,
      "end": 129,
      "expression": {
        "type": "AssignmentExpression",
        "start": 108,
        "end": 129,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 108,
          "end": 125,
          "object": {
            "type": "MemberExpression",
            "start": 108,
            "end": 123,
            "object": {
              "type": "Identifier",
              "start": 108,
              "end": 113,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 114,
              "end": 123,
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
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 128,
          "end": 129,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 170,
      "expression": {
        "type": "MemberExpression",
        "start": 152,
        "end": 169,
        "object": {
          "type": "MemberExpression",
          "start": 152,
          "end": 167,
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 157,
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 158,
            "end": 167,
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
          "start": 168,
          "end": 169,
          "decorators": [],
          "name": "k",
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
      "start": 171,
      "end": 194,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 180,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 183,
            "end": 194,
            "callee": {
              "type": "Identifier",
              "start": 187,
              "end": 192,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
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
      "start": 195,
      "end": 204,
      "expression": {
        "type": "CallExpression",
        "start": 195,
        "end": 204,
        "callee": {
          "type": "MemberExpression",
          "start": 195,
          "end": 202,
          "object": {
            "type": "Identifier",
            "start": 195,
            "end": 200,
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
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
      "start": 205,
      "end": 212,
      "expression": {
        "type": "MemberExpression",
        "start": 205,
        "end": 212,
        "object": {
          "type": "Identifier",
          "start": 205,
          "end": 210,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "decorators": [],
          "name": "i",
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
      "start": 213,
      "end": 220,
      "expression": {
        "type": "MemberExpression",
        "start": 213,
        "end": 220,
        "object": {
          "type": "Identifier",
          "start": 213,
          "end": 218,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "decorators": [],
          "name": "j",
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
      "start": 221,
      "end": 228,
      "expression": {
        "type": "MemberExpression",
        "start": 221,
        "end": 228,
        "object": {
          "type": "Identifier",
          "start": 221,
          "end": 226,
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 227,
          "end": 228,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
