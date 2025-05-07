__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 16,
      "end": 34,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 30,
          "end": 31,
          "exported": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 89,
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
        "value": "./a",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 68,
                    "end": 71,
                    "raw": "\"A\"",
                    "value": "A",
                    "regex": null,
                    "bigint": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 75,
      "end": 88,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 84,
          "end": 85,
          "exported": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 47,
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
        "value": "./b",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 27,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 42,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 28,
        "end": 41,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 30,
          "end": 41,
          "decorators": [],
          "name": "displayName",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 47,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 46,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
