__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 33,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 29,
          "end": 30,
          "exported": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 45,
            "end": 70,
            "properties": [
              {
                "type": "Property",
                "start": 47,
                "end": 68,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 48,
                  "end": 62,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 54,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 62,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false
                  }
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
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "using"
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 83,
            "end": 84,
            "raw": "2",
            "value": 2
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 87,
      "end": 106,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 94,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 100,
            "end": 105,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "w",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 104,
              "end": 105,
              "raw": "3",
              "value": 3
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 108,
      "end": 125,
      "declaration": {
        "type": "Literal",
        "start": 123,
        "end": 124,
        "raw": "4",
        "value": 4
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 127,
      "end": 151,
      "expression": {
        "type": "CallExpression",
        "start": 127,
        "end": 150,
        "arguments": [
          {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "decorators": [],
            "name": "w",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 127,
          "end": 138,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 127,
            "end": 134,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 138,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
