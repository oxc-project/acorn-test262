__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 47,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 47,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 30,
              "end": 45,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 30,
                "end": 40,
                "decorators": [],
                "name": "handleChar",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 45,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 43,
                  "end": 45,
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
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "Calculator",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 56,
        "end": 76,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 72,
          "end": 76,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 65,
          "end": 69,
          "decorators": [],
          "name": "test",
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
      "start": 78,
      "end": 106,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 85,
        "end": 106,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 102,
          "end": 106,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 94,
          "end": 99,
          "decorators": [],
          "name": "test2",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 47,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 47,
        "raw": "\"./file1\"",
        "value": "./file1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "decorators": [],
            "name": "Calculator",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "decorators": [],
            "name": "Calculator",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 20,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 20,
            "end": 24,
            "decorators": [],
            "name": "test",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 24,
            "decorators": [],
            "name": "test",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 26,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 26,
            "end": 31,
            "decorators": [],
            "name": "test2",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 26,
            "end": 31,
            "decorators": [],
            "name": "test2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 56,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 55,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 49,
          "end": 53,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 65,
      "expression": {
        "type": "CallExpression",
        "start": 57,
        "end": 64,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 57,
          "end": 62,
          "decorators": [],
          "name": "test2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
