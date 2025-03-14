multiModuleClodule1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 91,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 91,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 40,
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
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 40,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 54,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
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
              "start": 48,
              "end": 54,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 54,
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
            "type": "MethodDefinition",
            "start": 59,
            "end": 68,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 68,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
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
            "type": "MethodDefinition",
            "start": 73,
            "end": 89,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "boo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 89,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 89,
                "body": []
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
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 93,
      "end": 142,
      "body": {
        "type": "TSModuleBlock",
        "start": 102,
        "end": 142,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 108,
            "end": 125,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 115,
              "end": 125,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 119,
                  "end": 124,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 123,
                    "end": 124,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 130,
            "end": 140,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 134,
                "end": 139,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 138,
                  "end": 139,
                  "raw": "2",
                  "value": 2
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 143,
      "end": 219,
      "body": {
        "type": "TSModuleBlock",
        "start": 152,
        "end": 219,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 158,
            "end": 183,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 165,
              "end": 183,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 183,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 174,
                "end": 177,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 188,
            "end": 217,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 203,
              "end": 217,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 205,
                  "end": 215,
                  "argument": {
                    "type": "Literal",
                    "start": 212,
                    "end": 214,
                    "raw": "''",
                    "value": ""
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 151,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 229,
            "end": 239,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 235,
                "end": 238,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 255,
      "expression": {
        "type": "AssignmentExpression",
        "start": 241,
        "end": 254,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 241,
          "end": 246,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 243,
            "end": 246,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 249,
          "end": 254,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 251,
            "end": 254,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
