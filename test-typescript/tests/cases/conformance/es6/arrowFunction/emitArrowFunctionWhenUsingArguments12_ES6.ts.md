emitArrowFunctionWhenUsingArguments12_ES6.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 87,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 87,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 85,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 85,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 55,
                    "end": 79,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 59,
                        "end": 78,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 59,
                          "end": 60,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 63,
                          "end": 78,
                          "async": false,
                          "body": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 78,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 43,
                  "decorators": [],
                  "name": "arguments",
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
        "start": 24,
        "end": 25,
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
