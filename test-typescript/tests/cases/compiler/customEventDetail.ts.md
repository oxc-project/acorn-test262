__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
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
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 18,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7,
                "end": 18,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 18,
                  "decorators": [],
                  "name": "CustomEvent",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 50,
        "end": 115,
        "arguments": [
          {
            "type": "Literal",
            "start": 68,
            "end": 75,
            "raw": "'hello'",
            "value": "hello",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 77,
            "end": 81,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 83,
            "end": 87,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          },
          {
            "type": "ObjectExpression",
            "start": 89,
            "end": 114,
            "properties": [
              {
                "type": "Property",
                "start": 91,
                "end": 97,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 93,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 95,
                  "end": 97,
                  "raw": "12",
                  "value": 12,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 99,
                "end": 112,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 103,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 105,
                  "end": 112,
                  "raw": "'hello'",
                  "value": "hello",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 50,
          "end": 67,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 67,
            "decorators": [],
            "name": "initCustomEvent",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 125,
            "end": 138,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 125,
              "end": 133,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 127,
                "end": 133,
                "decorators": [],
                "name": "detail",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 134,
              "end": 138,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
