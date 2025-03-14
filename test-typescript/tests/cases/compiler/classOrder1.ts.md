classOrder1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 71,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 71,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 69,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 69,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 69,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 81,
            "end": 88,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 98,
      "expression": {
        "type": "CallExpression",
        "start": 90,
        "end": 97,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 90,
          "end": 95,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 92,
            "end": 95,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
