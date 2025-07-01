__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CustomEvent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 18
                },
                "typeArguments": null,
                "start": 7,
                "end": 18
              },
              "start": 5,
              "end": 18
            },
            "start": 4,
            "end": 18
          },
          "init": null,
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "initCustomEvent",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 67
          },
          "optional": false,
          "computed": false,
          "start": 50,
          "end": 67
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'",
            "start": 68,
            "end": 75
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 77,
            "end": 81
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 83,
            "end": 87
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 93
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 95,
                  "end": 97
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 91,
                "end": 97
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 103
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 105,
                  "end": 112
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 99,
                "end": 112
              }
            ],
            "start": 89,
            "end": 114
          }
        ],
        "optional": false,
        "start": 50,
        "end": 115
      },
      "directive": null,
      "start": 50,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 122
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 126
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "detail",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 133
              },
              "optional": false,
              "computed": false,
              "start": 125,
              "end": 133
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 138
            },
            "optional": false,
            "computed": false,
            "start": 125,
            "end": 138
          },
          "definite": false,
          "start": 121,
          "end": 138
        }
      ],
      "declare": false,
      "start": 117,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 139
}
```
