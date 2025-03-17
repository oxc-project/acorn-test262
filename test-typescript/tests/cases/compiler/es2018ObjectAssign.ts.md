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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 20,
                "end": 26,
                "name": "assign",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 37,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 39,
                      "end": 43,
                      "value": true,
                      "raw": "true"
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 81,
            "name": "p",
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
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 85,
            "end": 92,
            "name": "finally",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
