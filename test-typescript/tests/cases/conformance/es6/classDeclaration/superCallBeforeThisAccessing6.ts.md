superCallBeforeThisAccessing6.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 128,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 38,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 36,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 36,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 36,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "c",
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
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 127,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 127,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 77,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "decorators": [],
              "name": "_t",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 125,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 93,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 125,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 125,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 106,
                    "end": 118,
                    "expression": {
                      "type": "CallExpression",
                      "start": 106,
                      "end": 117,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 112,
                          "end": 116
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 106,
                        "end": 111
                      },
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 55,
        "end": 59,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
