ES5For-ofTypeCheck10.ts
```json
{
  "type": "Program",
  "start": 61,
  "end": 274,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 233,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 178,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 94,
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
              "start": 94,
              "end": 178,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 97,
                "end": 178,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 107,
                    "end": 172,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 114,
                      "end": 171,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 128,
                          "end": 138,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 132,
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
                            "start": 134,
                            "end": 138,
                            "raw": "true",
                            "value": true
                          }
                        },
                        {
                          "type": "Property",
                          "start": 152,
                          "end": 161,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 152,
                            "end": 157,
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
                            "start": 159,
                            "end": 161,
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
            "start": 183,
            "end": 231,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 184,
              "end": 199,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 184,
                "end": 190,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 191,
                "end": 199,
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
              "start": 200,
              "end": 231,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 203,
                "end": 231,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 213,
                    "end": 225,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 220,
                      "end": 224
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
        "start": 67,
        "end": 83,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ForOfStatement",
      "start": 235,
      "end": 274,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 271,
        "end": 274,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 240,
        "end": 245,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 244,
            "end": 245,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
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
        "start": 249,
        "end": 269,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 269,
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
