__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 28,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 27,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 19,
              "end": 27,
              "properties": [
                {
                  "type": "Property",
                  "start": 21,
                  "end": 25,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 24,
                    "end": 25,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
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
      "type": "ForInStatement",
      "start": 29,
      "end": 76,
      "body": {
        "type": "ExpressionStatement",
        "start": 54,
        "end": 76,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 54,
          "end": 75,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 66,
              "end": 74,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 69,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 70,
                "end": 73,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 54,
            "end": 65,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 61,
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 41,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 41,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
