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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 27,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 24,
                    "end": 25,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
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
      "type": "ForInStatement",
      "start": 29,
      "end": 76,
      "left": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 41,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 66,
              "end": 74,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 69,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 70,
                "end": 73,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          ],
          "optional": false
        },
        "directive": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
