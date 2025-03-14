a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 15,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 15,
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
      "type": "ExportNamedDeclaration",
      "start": 16,
      "end": 29,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 25,
          "end": 26,
          "exported": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 25,
      "end": 36,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 34,
        "end": 35,
        "literal": {
          "type": "Literal",
          "start": 34,
          "end": 35,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 50,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 46,
          "end": 47,
          "exported": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
c.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 25,
      "end": 74,
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 74,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 41,
            "end": 72,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 48,
              "end": 72,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 54,
                  "end": 71,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 65,
                    "decorators": [],
                    "name": "displayName",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 68,
                    "end": 71,
                    "raw": "\"A\"",
                    "value": "A"
                  }
                }
              ],
              "declare": false,
              "kind": "const"
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
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 80,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 79,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 95,
      "expression": {
        "type": "MemberExpression",
        "start": 81,
        "end": 94,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 83,
          "end": 94,
          "decorators": [],
          "name": "displayName",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
