forwardRefInClassProperties.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 266,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 266,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 30,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 19,
              "decorators": [],
              "name": "_b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 22,
              "end": 29,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 22,
                "end": 26
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 27,
                "end": 29,
                "decorators": [],
                "name": "_a",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 73,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 68,
              "decorators": [],
              "name": "_a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 71,
              "end": 72,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 99,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 88,
              "decorators": [],
              "name": "_B",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 91,
              "end": 98,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 91,
                "end": 95,
                "decorators": [],
                "name": "Test",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 96,
                "end": 98,
                "decorators": [],
                "name": "_A",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 149,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 144,
              "decorators": [],
              "name": "_A",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 147,
              "end": 148,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 264,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 161,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 161,
              "end": 264,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 264,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 178,
                    "end": 188,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 182,
                        "end": 187,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 183,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 187,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 248,
                    "end": 258,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 252,
                        "end": 257,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 253,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 256,
                          "end": 257,
                          "raw": "3",
                          "value": 3
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
        "end": 10,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
