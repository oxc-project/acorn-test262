__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 74,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 74,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 43,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "CallExpression",
              "start": 25,
              "end": 42,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 25,
                "end": 40,
                "computed": false,
                "object": {
                  "type": "NewExpression",
                  "start": 25,
                  "end": 32,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 33,
                  "end": 40,
                  "name": "method"
                }
              },
              "optional": false
            }
          },
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 72,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 48,
              "end": 55,
              "name": "method"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 72,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 72,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 60,
                    "end": 70,
                    "argument": {
                      "type": "Literal",
                      "start": 67,
                      "end": 69,
                      "raw": "42",
                      "value": 42
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 93,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 92,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 88,
            "end": 91,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "s",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 76,
          "end": 87,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 76,
            "end": 83,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 84,
            "end": 87,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
