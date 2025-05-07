__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 10,
            "end": 27,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 10,
              "end": 25,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 18,
                  "end": 24,
                  "raw": "'./ch'",
                  "value": "./ch",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 10,
                "end": 17,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 29,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 36,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 30,
        "end": 36,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 32,
          "end": 36,
          "decorators": [],
          "name": "grey",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 45,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 37,
        "end": 45,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 37,
          "end": 40,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 41,
          "end": 45,
          "decorators": [],
          "name": "grey",
          "optional": false,
          "typeAnnotation": null
        }
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
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 24,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 22,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 18,
                  "decorators": [],
                  "name": "grey",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 20,
                  "end": 22,
                  "properties": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 37,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 34,
          "end": 35,
          "exported": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "x",
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
