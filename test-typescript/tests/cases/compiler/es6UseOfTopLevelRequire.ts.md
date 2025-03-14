__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 52,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 52,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 49,
          "end": 52,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 31,
          "decorators": [],
          "name": "require",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 32,
            "end": 41,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 48,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 44,
            "end": 48
          }
        }
      },
      "exportKind": "value"
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
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "decorators": [],
              "name": "exports",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "raw": "0",
              "value": 0
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
      "start": 26,
      "end": 49,
      "declaration": {
        "type": "Identifier",
        "start": 41,
        "end": 48,
        "decorators": [],
        "name": "exports",
        "optional": false
      },
      "exportKind": "value"
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
  "end": 90,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "require",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 41,
      "expression": {
        "type": "CallExpression",
        "start": 26,
        "end": 40,
        "arguments": [
          {
            "type": "Literal",
            "start": 34,
            "end": 39,
            "raw": "\"arg\"",
            "value": "arg"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 26,
          "end": 33,
          "decorators": [],
          "name": "require",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 43,
      "end": 68,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 68,
        "raw": "\"./c\"",
        "value": "./c"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 50,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 57,
            "decorators": [],
            "name": "exports",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 77,
            "end": 88,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 77,
              "end": 84,
              "decorators": [],
              "name": "exports",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 87,
              "end": 88,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
