__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 14,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "3",
              "value": 3
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 56,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 56,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 46,
            "end": 55,
            "argument": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "n",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "log",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 34,
          "end": 42,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 42,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 83,
      "expression": {
        "type": "UnaryExpression",
        "start": 58,
        "end": 82,
        "argument": {
          "type": "CallExpression",
          "start": 63,
          "end": 82,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 63,
            "end": 80,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 63,
              "end": 71,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 67,
                  "end": 70,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 63,
                "end": 66,
                "decorators": [],
                "name": "log",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 72,
              "end": 80,
              "decorators": [],
              "name": "toString",
              "optional": false
            }
          },
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
