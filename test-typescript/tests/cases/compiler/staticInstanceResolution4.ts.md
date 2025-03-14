staticInstanceResolution4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 30,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 28,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
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
              "start": 23,
              "end": 28,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 28,
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
      "type": "ExpressionStatement",
      "start": 32,
      "end": 40,
      "expression": {
        "type": "CallExpression",
        "start": 32,
        "end": 39,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 32,
          "end": 37,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 34,
            "end": 37,
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
