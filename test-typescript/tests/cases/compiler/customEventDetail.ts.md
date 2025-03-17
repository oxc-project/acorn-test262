__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 140,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 19,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 19,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 8,
                "end": 19,
                "typeName": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 19,
                  "name": "CustomEvent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
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
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 117,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 116,
        "callee": {
          "type": "MemberExpression",
          "start": 51,
          "end": 68,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 68,
            "name": "initCustomEvent",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 69,
            "end": 76,
            "value": "hello",
            "raw": "'hello'"
          },
          {
            "type": "Literal",
            "start": 78,
            "end": 82,
            "value": true,
            "raw": "true"
          },
          {
            "type": "Literal",
            "start": 84,
            "end": 88,
            "value": true,
            "raw": "true"
          },
          {
            "type": "ObjectExpression",
            "start": 90,
            "end": 115,
            "properties": [
              {
                "type": "Property",
                "start": 92,
                "end": 98,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 94,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 96,
                  "end": 98,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 100,
                "end": 113,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 106,
                  "end": 113,
                  "value": "hello",
                  "raw": "'hello'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 126,
            "end": 139,
            "object": {
              "type": "MemberExpression",
              "start": 126,
              "end": 134,
              "object": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 128,
                "end": 134,
                "name": "detail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
