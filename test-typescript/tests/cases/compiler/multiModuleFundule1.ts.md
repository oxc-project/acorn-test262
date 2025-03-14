multiModuleFundule1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 25,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
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
        "name": "C",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 20,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            }
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 61,
      "body": {
        "type": "TSModuleBlock",
        "start": 36,
        "end": 61,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 42,
            "end": 59,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 49,
              "end": 59,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 53,
                  "end": 58,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 57,
                    "end": 58,
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
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 62,
      "end": 104,
      "body": {
        "type": "TSModuleBlock",
        "start": 71,
        "end": 104,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 77,
            "end": 102,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 84,
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
              "id": {
                "type": "Identifier",
                "start": 93,
                "end": 96,
                "decorators": [],
                "name": "foo",
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
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 118,
            "arguments": [
              {
                "type": "Literal",
                "start": 116,
                "end": 117,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 126,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 129,
            "end": 137,
            "arguments": [
              {
                "type": "Literal",
                "start": 135,
                "end": 136,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
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
      "type": "VariableDeclaration",
      "start": 187,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 196,
            "end": 203,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 196,
              "end": 201,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 198,
                "end": 201,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
