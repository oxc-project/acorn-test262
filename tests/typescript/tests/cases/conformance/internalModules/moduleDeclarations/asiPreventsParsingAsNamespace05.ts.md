__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "namespace",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 16,
            "end": 18
          },
          "definite": false,
          "start": 4,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 31
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 33
        },
        "start": 30,
        "end": 33
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "init": {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 55,
                    "end": 57
                  },
                  "definite": false,
                  "start": 51,
                  "end": 57
                }
              ],
              "declare": false,
              "start": 47,
              "end": 58
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 40,
            "end": 58
          }
        ],
        "start": 34,
        "end": 60
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 20,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "namespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 71
      },
      "directive": null,
      "start": 62,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "optional": false,
          "computed": false,
          "start": 72,
          "end": 75
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 77
        },
        "optional": false,
        "computed": false,
        "start": 72,
        "end": 77
      },
      "directive": null,
      "start": 72,
      "end": 77
    },
    {
      "type": "BlockStatement",
      "body": [],
      "start": 78,
      "end": 81
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 81
}
```
