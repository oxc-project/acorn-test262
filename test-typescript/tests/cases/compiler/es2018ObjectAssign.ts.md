es2018ObjectAssign.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "test",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 46,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 27,
                "end": 29,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 31,
                "end": 45,
                "properties": [
                  {
                    "type": "Property",
                    "start": 33,
                    "end": 43,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 37,
                      "decorators": [],
                      "name": "test",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 39,
                      "end": 43,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 13,
              "end": 26,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 13,
                "end": 19,
                "decorators": [],
                "name": "Object",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 20,
                "end": 26,
                "decorators": [],
                "name": "assign",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 81,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 81,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 81,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 73,
                  "end": 81,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 74,
                      "end": 80
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 73,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 95,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 94,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 83,
          "end": 92,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 85,
            "end": 92,
            "decorators": [],
            "name": "finally",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
