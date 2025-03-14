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
      "end": 74,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 74,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 72,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
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
              "start": 25,
              "end": 72,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 72,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 50,
                    "end": 66,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 54,
                        "end": 65,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 58,
                          "decorators": [],
                          "name": "foge",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 65,
                          "decorators": [],
                          "name": "used",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 26,
                  "end": 38,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 38,
                    "decorators": [],
                    "name": "used",
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
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
