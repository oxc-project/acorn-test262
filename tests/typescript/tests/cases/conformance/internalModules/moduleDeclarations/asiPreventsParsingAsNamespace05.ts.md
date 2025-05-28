__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "namespace",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 18,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 20,
      "end": 60,
      "id": {
        "type": "TSQualifiedName",
        "start": 30,
        "end": 33,
        "left": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 32,
          "end": 33,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 34,
        "end": 60,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 40,
            "end": 58,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 47,
              "end": 58,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 51,
                  "end": 57,
                  "id": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 55,
                    "end": 57,
                    "value": 20,
                    "raw": "20"
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
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 71,
      "expression": {
        "type": "Identifier",
        "start": 62,
        "end": 71,
        "decorators": [],
        "name": "namespace",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 77,
      "expression": {
        "type": "MemberExpression",
        "start": 72,
        "end": 77,
        "object": {
          "type": "MemberExpression",
          "start": 72,
          "end": 75,
          "object": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "BlockStatement",
      "start": 78,
      "end": 81,
      "body": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
