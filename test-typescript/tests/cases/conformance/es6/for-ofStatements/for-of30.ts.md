for-of30.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 247,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 206,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 133,
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
              "end": 133,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 133,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 127,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 69,
                      "end": 127,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 83,
                          "end": 94,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 87,
                            "decorators": [],
                            "name": "done",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 89,
                            "end": 94,
                            "raw": "false",
                            "value": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 108,
                          "end": 117,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 108,
                            "end": 113,
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
                            "start": 115,
                            "end": 117,
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
            "type": "PropertyDefinition",
            "start": 139,
            "end": 150,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 145,
              "decorators": [],
              "name": "return",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 148,
              "end": 149,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 204,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 157,
              "end": 172,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 157,
                "end": 163,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 164,
                "end": 172,
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
              "start": 173,
              "end": 204,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 204,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 186,
                    "end": 198,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 193,
                      "end": 197
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
      "start": 208,
      "end": 247,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 244,
        "end": 247,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 213,
        "end": 218,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 217,
            "end": 218,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
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
        "start": 222,
        "end": 242,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 226,
          "end": 242,
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
