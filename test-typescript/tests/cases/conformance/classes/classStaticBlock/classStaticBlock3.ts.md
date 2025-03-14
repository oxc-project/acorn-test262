classStaticBlock3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 200,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 200,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 42,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "decorators": [],
              "name": "f1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 40,
              "end": 41,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "StaticBlock",
            "start": 48,
            "end": 100,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 65,
                "end": 94,
                "expression": {
                  "type": "CallExpression",
                  "start": 65,
                  "end": 94,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 77,
                      "end": 81,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 81,
                        "decorators": [],
                        "name": "f1",
                        "optional": false
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "start": 83,
                      "end": 87,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 84,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 87,
                        "decorators": [],
                        "name": "f2",
                        "optional": false
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "start": 89,
                      "end": 93,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 90,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 93,
                        "decorators": [],
                        "name": "f3",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 65,
                    "end": 76,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 72,
                      "decorators": [],
                      "name": "console",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 76,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 120,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 115,
              "decorators": [],
              "name": "f2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 118,
              "end": 119,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "StaticBlock",
            "start": 126,
            "end": 178,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 143,
                "end": 172,
                "expression": {
                  "type": "CallExpression",
                  "start": 143,
                  "end": 172,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 155,
                      "end": 159,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 159,
                        "decorators": [],
                        "name": "f1",
                        "optional": false
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "start": 161,
                      "end": 165,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 165,
                        "decorators": [],
                        "name": "f2",
                        "optional": false
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "start": 167,
                      "end": 171,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 171,
                        "decorators": [],
                        "name": "f3",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 143,
                    "end": 154,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 150,
                      "decorators": [],
                      "name": "console",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 154,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 184,
            "end": 198,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 193,
              "decorators": [],
              "name": "f3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 196,
              "end": 197,
              "raw": "3",
              "value": 3
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
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
