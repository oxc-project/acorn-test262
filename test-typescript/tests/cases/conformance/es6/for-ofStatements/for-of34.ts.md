for-of34.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 174,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 133,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 133,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 77,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 77,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 71,
                    "argument": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 131,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 84,
              "end": 99,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 84,
                "end": 90,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 91,
                "end": 99,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 131,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 131,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 113,
                    "end": 125,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 120,
                      "end": 124
                    }
                  }
                ]
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
        "start": 22,
        "end": 38,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ForOfStatement",
      "start": 135,
      "end": 174,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 171,
        "end": 174,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 140,
        "end": 145,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 144,
            "end": 145,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "NewExpression",
        "start": 149,
        "end": 169,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 153,
          "end": 169,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
