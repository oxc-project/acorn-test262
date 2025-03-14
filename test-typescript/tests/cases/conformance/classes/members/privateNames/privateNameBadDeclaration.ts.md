privateNameBadDeclaration.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 287,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 16,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 120,
      "expression": {
        "type": "AssignmentExpression",
        "start": 17,
        "end": 120,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 17,
          "end": 28,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "prototype",
            "optional": false
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 31,
          "end": 120,
          "properties": [
            {
              "type": "Property",
              "start": 35,
              "end": 40,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 35,
                "end": 37,
                "name": "x"
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 39,
                "end": 40,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "Property",
              "start": 61,
              "end": 68,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 61,
                "end": 63,
                "name": "m"
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 63,
                "end": 68,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 66,
                  "end": 68,
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
              "type": "Property",
              "start": 87,
              "end": 109,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 91,
                "end": 93,
                "name": "p"
              },
              "kind": "get",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 93,
                "end": 109,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 96,
                  "end": 109,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 98,
                      "end": 107,
                      "argument": {
                        "type": "Literal",
                        "start": 105,
                        "end": 107,
                        "raw": "\"\"",
                        "value": ""
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
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 121,
      "end": 132,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 132,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 236,
      "expression": {
        "type": "AssignmentExpression",
        "start": 133,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 133,
          "end": 144,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 144,
            "decorators": [],
            "name": "prototype",
            "optional": false
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 147,
          "end": 236,
          "properties": [
            {
              "type": "Property",
              "start": 151,
              "end": 156,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 151,
                "end": 153,
                "name": "y"
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 155,
                "end": 156,
                "raw": "2",
                "value": 2
              }
            },
            {
              "type": "Property",
              "start": 177,
              "end": 184,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 177,
                "end": 179,
                "name": "m"
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 179,
                "end": 184,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 182,
                  "end": 184,
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
              "type": "Property",
              "start": 203,
              "end": 225,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 207,
                "end": 209,
                "name": "p"
              },
              "kind": "get",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 209,
                "end": 225,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 212,
                  "end": 225,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 214,
                      "end": 223,
                      "argument": {
                        "type": "Literal",
                        "start": 221,
                        "end": 223,
                        "raw": "\"\"",
                        "value": ""
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
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 237,
      "end": 287,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 245,
        "end": 287,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 249,
            "end": 285,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 260,
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
              "start": 260,
              "end": 285,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 263,
                "end": 285,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 269,
                    "end": 281,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 269,
                      "end": 280,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 269,
                        "end": 276,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 274,
                          "end": 276,
                          "name": "z"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 279,
                        "end": 280,
                        "raw": "3",
                        "value": 3
                      }
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
        "start": 243,
        "end": 244,
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
