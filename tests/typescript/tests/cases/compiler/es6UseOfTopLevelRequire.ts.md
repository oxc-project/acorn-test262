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
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 31,
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
        },
        "body": {
          "type": "BlockStatement",
          "start": 49,
          "end": 52,
          "body": []
        },
        "expression": false
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
        "optional": false,
        "typeAnnotation": null
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
  "end": 89,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "value": "./b",
        "raw": "\"./b\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 41,
      "expression": {
        "type": "CallExpression",
        "start": 26,
        "end": 40,
        "callee": {
          "type": "Identifier",
          "start": 26,
          "end": 33,
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 34,
            "end": 39,
            "value": "arg",
            "raw": "\"arg\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 43,
      "end": 68,
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 68,
        "value": "./c",
        "raw": "\"./c\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 89,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 77,
            "end": 88,
            "left": {
              "type": "Identifier",
              "start": 77,
              "end": 84,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 87,
              "end": 88,
              "value": 2,
              "raw": "2"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
