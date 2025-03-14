customEventDetail.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 19,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "CustomEvent",
                  "optional": false
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
      "start": 51,
      "end": 117,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 116,
        "arguments": [
          {
            "type": "Literal",
            "start": 69,
            "end": 76,
            "raw": "'hello'",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 78,
            "end": 82,
            "raw": "true",
            "value": true
          },
          {
            "type": "Literal",
            "start": 84,
            "end": 88,
            "raw": "true",
            "value": true
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 94,
                  "decorators": [],
                  "name": "id",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 96,
                  "end": 98,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 100,
                "end": 113,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 106,
                  "end": 113,
                  "raw": "'hello'",
                  "value": "hello"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 51,
          "end": 68,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 68,
            "decorators": [],
            "name": "initCustomEvent",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 126,
            "end": 139,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 126,
              "end": 134,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 128,
                "end": 134,
                "decorators": [],
                "name": "detail",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "decorators": [],
              "name": "name",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
