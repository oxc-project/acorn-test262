for-of31.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 237,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 196,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 140,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 140,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 140,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 134,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 69,
                      "end": 134,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 115,
                          "end": 124,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 120,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 122,
                            "end": 124,
                            "raw": "\"\"",
                            "value": ""
                          }
                        }
                      ]
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
            "start": 146,
            "end": 194,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 147,
              "end": 162,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 147,
                "end": 153,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 162,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 163,
              "end": 194,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 194,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 176,
                    "end": 188,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 183,
                      "end": 187
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
        "start": 22,
        "end": 38,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ForOfStatement",
      "start": 198,
      "end": 237,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 234,
        "end": 237,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 203,
        "end": 208,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 207,
            "end": 208,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "NewExpression",
        "start": 212,
        "end": 232,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 216,
          "end": 232,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
