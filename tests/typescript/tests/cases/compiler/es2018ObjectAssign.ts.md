__ESTREE_TEST__:PASS:
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 46,
            "callee": {
              "type": "MemberExpression",
              "start": 13,
              "end": 26,
              "object": {
                "type": "Identifier",
                "start": 13,
                "end": 19,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 20,
                "end": 26,
                "decorators": [],
                "name": "assign",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 37,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 39,
                      "end": 43,
                      "value": true,
                      "raw": "true"
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 82,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 81,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 73,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 95,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 94,
        "callee": {
          "type": "MemberExpression",
          "start": 83,
          "end": 92,
          "object": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 85,
            "end": 92,
            "decorators": [],
            "name": "finally",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
