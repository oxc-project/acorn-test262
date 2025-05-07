__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AwaitExpression",
            "start": 29,
            "end": 36,
            "argument": {
              "type": "Literal",
              "start": 35,
              "end": 36,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 49,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ForOfStatement",
      "start": 50,
      "end": 78,
      "await": true,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 78,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 61,
        "end": 68,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 67,
            "end": 68,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 72,
        "end": 74,
        "elements": []
      }
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
  "start": 19,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AwaitExpression",
            "start": 29,
            "end": 36,
            "argument": {
              "type": "Literal",
              "start": 35,
              "end": 36,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 49,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ForOfStatement",
      "start": 50,
      "end": 78,
      "await": true,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 78,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 61,
        "end": 68,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 67,
            "end": 68,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 72,
        "end": 74,
        "elements": []
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
