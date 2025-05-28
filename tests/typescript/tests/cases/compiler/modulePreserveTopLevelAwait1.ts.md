__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 28,
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "start": 11,
        "end": 18,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 17,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 22,
        "end": 24,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 28,
        "body": []
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 53,
      "expression": {
        "type": "AwaitExpression",
        "start": 29,
        "end": 52,
        "argument": {
          "type": "CallExpression",
          "start": 35,
          "end": 52,
          "callee": {
            "type": "MemberExpression",
            "start": 35,
            "end": 50,
            "object": {
              "type": "Identifier",
              "start": 35,
              "end": 42,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 43,
              "end": 50,
              "decorators": [],
              "name": "resolve",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 65,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
