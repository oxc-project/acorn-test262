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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 18,
                  "decorators": [],
                  "name": "CustomEvent",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 116,
      "expression": {
        "type": "CallExpression",
        "start": 50,
        "end": 115,
        "callee": {
          "type": "MemberExpression",
          "start": 50,
          "end": 67,
          "object": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 67,
            "decorators": [],
            "name": "initCustomEvent",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 68,
            "end": 75,
            "value": "hello",
            "raw": "'hello'"
          },
          {
            "type": "Literal",
            "start": 77,
            "end": 81,
            "value": true,
            "raw": "true"
          },
          {
            "type": "Literal",
            "start": 83,
            "end": 87,
            "value": true,
            "raw": "true"
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 93,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 95,
                  "end": 97,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 99,
                "end": 112,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 103,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 105,
                  "end": 112,
                  "value": "hello",
                  "raw": "'hello'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 139,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 138,
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
            "object": {
              "type": "MemberExpression",
              "start": 125,
              "end": 133,
              "object": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 127,
                "end": 133,
                "decorators": [],
                "name": "detail",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 134,
              "end": 138,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
