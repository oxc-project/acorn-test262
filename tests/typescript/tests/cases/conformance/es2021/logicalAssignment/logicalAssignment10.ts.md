__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "count",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 13,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 28,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 22,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 25,
            "end": 27,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 29,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 42,
        "decorators": [],
        "name": "incr",
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
        "start": 45,
        "end": 68,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 51,
            "end": 66,
            "argument": {
              "type": "UpdateExpression",
              "start": 58,
              "end": 65,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 60,
                "end": 65,
                "decorators": [],
                "name": "count",
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
      "type": "VariableDeclaration",
      "start": 70,
      "end": 94,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 80,
            "decorators": [],
            "name": "oobj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 83,
            "end": 94,
            "properties": [
              {
                "type": "Property",
                "start": 89,
                "end": 92,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
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
      "start": 96,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 118,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 96,
          "end": 107,
          "object": {
            "type": "Identifier",
            "start": 96,
            "end": 99,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "CallExpression",
            "start": 100,
            "end": 106,
            "callee": {
              "type": "Identifier",
              "start": 100,
              "end": 104,
              "decorators": [],
              "name": "incr",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "CallExpression",
          "start": 112,
          "end": 118,
          "callee": {
            "type": "Identifier",
            "start": 112,
            "end": 116,
            "decorators": [],
            "name": "incr",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 120,
        "end": 150,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 120,
          "end": 139,
          "object": {
            "type": "MemberExpression",
            "start": 120,
            "end": 131,
            "object": {
              "type": "Identifier",
              "start": 120,
              "end": 124,
              "decorators": [],
              "name": "oobj",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 125,
              "end": 130,
              "value": "obj",
              "raw": "\"obj\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "CallExpression",
            "start": 132,
            "end": 138,
            "callee": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "decorators": [],
              "name": "incr",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "CallExpression",
          "start": 144,
          "end": 150,
          "callee": {
            "type": "Identifier",
            "start": 144,
            "end": 148,
            "decorators": [],
            "name": "incr",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
