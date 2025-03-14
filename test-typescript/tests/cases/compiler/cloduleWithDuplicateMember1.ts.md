cloduleWithDuplicateMember1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 104,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 104,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 35,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 35,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 35,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 24,
                    "end": 33,
                    "argument": {
                      "type": "Literal",
                      "start": 31,
                      "end": 32,
                      "raw": "1",
                      "value": 1
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
            "start": 40,
            "end": 81,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 81,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 81,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 65,
                    "end": 75,
                    "argument": {
                      "type": "Literal",
                      "start": 72,
                      "end": 74,
                      "raw": "''",
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
          },
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 102,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 96,
              "end": 102,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 102,
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
      "start": 106,
      "end": 140,
      "body": {
        "type": "TSModuleBlock",
        "start": 115,
        "end": 140,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 121,
            "end": 138,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 128,
              "end": 138,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 132,
                  "end": 137,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 136,
                    "end": 137,
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 141,
      "end": 211,
      "body": {
        "type": "TSModuleBlock",
        "start": 150,
        "end": 211,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 156,
            "end": 181,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 163,
              "end": 181,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 181,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 172,
                "end": 175,
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
            "type": "ExportNamedDeclaration",
            "start": 186,
            "end": 209,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 193,
              "end": 209,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 209,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 202,
                "end": 203,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 149,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
