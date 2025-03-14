blockScopedEnumVariablesUseBeforeDef_preserve.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 51,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 51,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 22,
            "end": 32,
            "argument": {
              "type": "MemberExpression",
              "start": 29,
              "end": 32,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 37,
            "end": 49,
            "body": {
              "type": "TSEnumBody",
              "start": 44,
              "end": 49,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 46,
                  "end": 47,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "E",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 110,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 110,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 75,
            "end": 85,
            "argument": {
              "type": "MemberExpression",
              "start": 82,
              "end": 85,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 90,
            "end": 108,
            "body": {
              "type": "TSEnumBody",
              "start": 103,
              "end": 108,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 105,
                  "end": 106,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              ]
            },
            "const": true,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "E",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "decorators": [],
            "name": "config",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 127,
            "end": 152,
            "properties": [
              {
                "type": "Property",
                "start": 133,
                "end": 149,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 136,
                  "end": 149,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 147,
                    "decorators": [],
                    "name": "AfterObject",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 155,
      "end": 192,
      "body": {
        "type": "TSEnumBody",
        "start": 178,
        "end": 192,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 184,
            "end": 189,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 188,
              "end": 189,
              "raw": "2",
              "value": 2
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 177,
        "decorators": [],
        "name": "AfterObject",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
