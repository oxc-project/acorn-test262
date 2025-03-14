inheritanceMemberAccessorOverridingMethod.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 48,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 48,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 46,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 46,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 18,
                "end": 46,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 28,
                    "end": 40,
                    "argument": {
                      "type": "Literal",
                      "start": 35,
                      "end": 39,
                      "raw": "\"20\"",
                      "value": "20"
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
        "name": "a",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 153,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 153,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 116,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 79,
              "end": 116,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 116,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 92,
                    "end": 110,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 99,
                      "end": 109,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 105,
                        "end": 109,
                        "raw": "\"20\"",
                        "value": "20"
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
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
            "start": 121,
            "end": 151,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 151,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 151,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 127,
                  "end": 133,
                  "decorators": [],
                  "name": "aValue",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
