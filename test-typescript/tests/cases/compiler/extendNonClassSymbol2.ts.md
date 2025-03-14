__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 33,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 20,
            "end": 31,
            "expression": {
              "type": "AssignmentExpression",
              "start": 20,
              "end": 30,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 20,
                "end": 26,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 20,
                  "end": 24
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 29,
                "end": 30,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 42,
            "end": 51,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 97,
      "end": 119,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 119,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 113,
        "end": 116,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
