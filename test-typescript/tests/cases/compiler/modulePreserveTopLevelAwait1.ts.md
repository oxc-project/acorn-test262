__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 17,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
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
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 43,
              "end": 50,
              "name": "resolve",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
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
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
