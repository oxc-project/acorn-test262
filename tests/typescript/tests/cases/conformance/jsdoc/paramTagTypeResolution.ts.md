__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 114,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 113,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 113,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 65,
          "end": 79,
          "object": {
            "type": "Identifier",
            "start": 65,
            "end": 71,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 79,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 82,
          "end": 113,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 98,
            "end": 113,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 100,
                "end": 111,
                "argument": {
                  "type": "CallExpression",
                  "start": 107,
                  "end": 111,
                  "callee": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ]
          },
          "expression": false
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
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 26,
            "callee": {
              "type": "Identifier",
              "start": 8,
              "end": 15,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 16,
                "end": 25,
                "value": "./first",
                "raw": "'./first'"
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
      "start": 28,
      "end": 42,
      "expression": {
        "type": "CallExpression",
        "start": 28,
        "end": 42,
        "callee": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 30,
            "end": 31,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 33,
            "end": 41,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 41,
              "body": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
