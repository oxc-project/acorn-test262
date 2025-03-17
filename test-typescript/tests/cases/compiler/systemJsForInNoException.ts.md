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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 28,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 27,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 24,
                    "end": 25,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ForInStatement",
      "start": 29,
      "end": 76,
      "left": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 41,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "name": "obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 54,
        "end": 76,
        "expression": {
          "type": "CallExpression",
          "start": 54,
          "end": 75,
          "callee": {
            "type": "MemberExpression",
            "start": 54,
            "end": 65,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 61,
              "name": "console",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "name": "log",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 66,
              "end": 74,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 69,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 70,
                "end": 73,
                "name": "key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
