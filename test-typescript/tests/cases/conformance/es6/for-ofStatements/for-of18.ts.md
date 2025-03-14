for-of18.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 259,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 189,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 189,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 134,
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
              "end": 134,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 134,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 128,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 69,
                      "end": 127,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 83,
                          "end": 92,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 88,
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
                            "start": 90,
                            "end": 92,
                            "raw": "\"\"",
                            "value": ""
                          }
                        },
                        {
                          "type": "Property",
                          "start": 106,
                          "end": 117,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 110,
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
                            "start": 112,
                            "end": 117,
                            "raw": "false",
                            "value": false
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
            "start": 139,
            "end": 187,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 140,
              "end": 155,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 140,
                "end": 146,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 147,
                "end": 155,
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
              "start": 156,
              "end": 187,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 187,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 169,
                    "end": 181,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 176,
                      "end": 180
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
      "type": "VariableDeclaration",
      "start": 191,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 204,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 204,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 198,
                "end": 204
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 206,
      "end": 241,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 238,
        "end": 241,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "decorators": [],
        "name": "v",
        "optional": false
      },
      "right": {
        "type": "NewExpression",
        "start": 216,
        "end": 236,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 220,
          "end": 236,
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
