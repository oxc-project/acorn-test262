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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "namespace",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 18,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 20,
      "end": 60,
      "body": {
        "type": "TSModuleBlock",
        "start": 34,
        "end": 60,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 40,
            "end": 58,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 47,
              "end": 58,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 51,
                  "end": 57,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 55,
                    "end": 57,
                    "raw": "20",
                    "value": 20
                  }
                }
              ],
              "declare": false,
              "kind": "let"
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
        "type": "TSQualifiedName",
        "start": 30,
        "end": 33,
        "left": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 32,
          "end": 33,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      },
      "kind": "namespace"
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
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 77,
      "expression": {
        "type": "MemberExpression",
        "start": 72,
        "end": 77,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 72,
          "end": 75,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
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
