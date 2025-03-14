typeOfThisInStatics.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 125,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 125,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 56,
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
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 56,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 56,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 37,
                    "end": 50,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 41,
                        "end": 49,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 41,
                          "end": 42,
                          "decorators": [],
                          "name": "r",
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 45,
                          "end": 49
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
            "start": 61,
            "end": 123,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 123,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 123,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 86,
                    "end": 99,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 90,
                        "end": 98,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 91,
                          "decorators": [],
                          "name": "r",
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 94,
                          "end": 98
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 108,
                    "end": 117,
                    "argument": {
                      "type": "Literal",
                      "start": 115,
                      "end": 116,
                      "raw": "1",
                      "value": 1
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
    }
  ],
  "sourceType": "script"
}
```
