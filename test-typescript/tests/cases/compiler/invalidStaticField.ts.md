__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 36,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 34,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
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
              "start": 13,
              "end": 34,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 16,
                "end": 34,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 18,
                    "end": 32,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 25,
                      "end": 31,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 25,
                        "end": 26,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 31,
                        "decorators": [],
                        "name": "NULL",
                        "optional": false
                      }
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 75,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 75,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 47,
            "end": 73,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 62,
              "decorators": [],
              "name": "NOT_NULL",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "NewExpression",
              "start": 65,
              "end": 72,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
