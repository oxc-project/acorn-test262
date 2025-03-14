modifierOnClassExpressionMemberInFunction.ts
```json
{
  "type": "Program",
  "start": 24,
  "end": 147,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 24,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 147,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 43,
            "end": 145,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 47,
                "end": 145,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 51,
                  "end": 145,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 59,
                    "end": 145,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 69,
                        "end": 86,
                        "accessibility": "public",
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 81,
                          "decorators": [],
                          "name": "prop1",
                          "optional": false
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": false,
                        "value": {
                          "type": "Literal",
                          "start": 84,
                          "end": 85,
                          "raw": "1",
                          "value": 1
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 95,
                        "end": 112,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 106,
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
                          "start": 106,
                          "end": 112,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 109,
                            "end": 112,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 121,
                        "end": 139,
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 133,
                          "decorators": [],
                          "name": "prop2",
                          "optional": false
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "value": {
                          "type": "Literal",
                          "start": 136,
                          "end": 138,
                          "raw": "43",
                          "value": 43
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "implements": [],
                  "superClass": null
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
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
