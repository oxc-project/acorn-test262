__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 13,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 25,
            "end": 50,
            "properties": [
              {
                "type": "Property",
                "start": 27,
                "end": 48,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 28,
                  "end": 42,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 34,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 42,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 43,
                  "end": 48,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 46,
                    "end": 48,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "using"
    },
    {
      "type": "IfStatement",
      "start": 53,
      "end": 82,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 64,
        "end": 82,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 70,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 74,
                "end": 79,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 78,
                  "end": 79,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 57,
        "end": 62,
        "raw": "false",
        "value": false,
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 123,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 123,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 121,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 103,
              "end": 120,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 103,
                "end": 114,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 110,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 114,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
