__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 65,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 37,
              "decorators": [],
              "name": "GetNumber",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 65,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 65,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 50,
                    "end": 59,
                    "argument": {
                      "type": "Literal",
                      "start": 57,
                      "end": 58,
                      "raw": "2",
                      "value": 2
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
        "end": 14,
        "decorators": [],
        "name": "SomeBase",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 68,
      "end": 135,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 135,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 133,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 116,
              "decorators": [],
              "name": "SomeNumber",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "CallExpression",
              "start": 119,
              "end": 132,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 119,
                "end": 130,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 130,
                  "decorators": [],
                  "name": "GetNumber",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
        "decorators": [],
        "name": "P",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 84,
        "end": 92,
        "decorators": [],
        "name": "SomeBase",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
